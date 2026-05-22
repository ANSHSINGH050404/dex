import { Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { prisma } from "../lib/prisma.js";
import {
  generateAccessToken,
  generateRefreshToken,
} from "../utils/token.js";
import { AuthRequest } from "../middleware/auth.js";

export const signup = async (req: AuthRequest, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  const existing = await prisma.user.findUnique({
    where: { email },
  });

  if (existing) {
    return res.status(409).json({ message: "Email already in use" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
    },
  });

  return res.status(201).json({ message: "User created" });
};

export const login = async (req: AuthRequest, res: Response) => {
  const { email, password } = req.body;

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    return res.status(401).json({
      message: "Invalid credentials",
    });
  }

  const validPassword = await bcrypt.compare(password, user.password);

  if (!validPassword) {
    return res.status(401).json({
      message: "Invalid credentials",
    });
  }

  const accessToken = generateAccessToken(user.id);
  const refreshToken = generateRefreshToken(user.id);

  const hashedToken = await bcrypt.hash(refreshToken, 10);

  await prisma.refreshToken.create({
    data: {
      token: hashedToken,
      userId: user.id,
      expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    },
  });

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: false,
    sameSite: "strict",
  });

  return res.json({ accessToken });
};

export const refresh = async (req: AuthRequest, res: Response) => {
  const refreshToken = req.cookies.refreshToken;

  if (!refreshToken) {
    return res.status(401).json({ message: "No refresh token" });
  }

  try {
    const decoded = jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET!
    ) as {
      userId: string;
    };

    const userTokens = await prisma.refreshToken.findMany({
      where: { userId: decoded.userId },
    });

    let validToken = null;

    for (const dbToken of userTokens) {
      const matched = await bcrypt.compare(refreshToken, dbToken.token);

      if (matched) {
        validToken = dbToken;
        break;
      }
    }

    if (!validToken) {
      return res.status(403).json({ message: "Invalid refresh token" });
    }

    if (validToken.expiresAt < new Date()) {
      await prisma.refreshToken.delete({
        where: { id: validToken.id },
      });

      return res.status(403).json({ message: "Refresh token expired" });
    }

    await prisma.refreshToken.delete({
      where: { id: validToken.id },
    });

    const newRefreshToken = generateRefreshToken(decoded.userId);
    const hashedNewToken = await bcrypt.hash(newRefreshToken, 10);

    await prisma.refreshToken.create({
      data: {
        token: hashedNewToken,
        userId: decoded.userId,
        expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      },
    });

    const newAccessToken = generateAccessToken(decoded.userId);

    res.cookie("refreshToken", newRefreshToken, {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
    });

    return res.json({ accessToken: newAccessToken });
  } catch {
    return res.status(403).json({ message: "Invalid token" });
  }
};

export const protectedRoute = (req: AuthRequest, res: Response) => {
  return res.json({
    message: "Protected route",
    userId: req.userId,
  });
};

export const logout = async (req: AuthRequest, res: Response) => {
  const refreshToken = req.cookies.refreshToken;

  if (refreshToken) {
    const tokens = await prisma.refreshToken.findMany();

    for (const token of tokens) {
      const matched = await bcrypt.compare(refreshToken, token.token);

      if (matched) {
        await prisma.refreshToken.delete({
          where: { id: token.id },
        });

        break;
      }
    }
  }

  res.clearCookie("refreshToken");

  return res.json({ message: "Logged out" });
};
