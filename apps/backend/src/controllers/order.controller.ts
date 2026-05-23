import { Response } from "express";
import { prisma } from "../lib/prisma.js";
import { AuthRequest } from "../middleware/auth.js";


export const Order = async (req: AuthRequest, res: Response) => {
  const userId = req.userId;
  const { stockSymbol, side, type, price, quantity } = req.body;

  if (!stockSymbol || !side || !type || !quantity || quantity <= 0) {
    return res
      .status(400)
      .json({ error: "Missing or invalid required fields" });
  }

  if (type !== "LIMIT" && type !== "MARKET") {
    return res.status(400).json({ error: "Type must be LIMIT or MARKET" });
  }

  if (side !== "BUY" && side !== "SELL") {
    return res.status(400).json({ error: "Side must be BUY or SELL" });
  }

  if (type === "LIMIT" && (price === undefined || price <= 0)) {
    return res
      .status(400)
      .json({ error: "Limit orders require a valid price" });
  }

  const stock = await prisma.stock.findUnique({
    where: { symbol: stockSymbol },
  });

  if (!stock) {
    return res.status(400).json({ error: "Stock does not exist" });
  }

  const user = await prisma.user.findUnique({
    where: { id: userId },
  });

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  const qty = parseInt(quantity, 10);
  const orderPrice = Number(type === "MARKET" ? stock.price : price);
  const cost = orderPrice * qty;

  if (side === "BUY") {
    const available = Number(user.balance) - Number(user.lockedBalance);
    if (available < cost) {
      return res.status(400).json({ error: "Insufficient balance" });
    }
  } else {
    const holding = 0;
    if (quantity > holding) {
      return res.status(400).json({ error: "Insufficient stock holdings" });
    }
  }

  await prisma.user.update({
    where: { id: userId },
    data: { lockedBalance: Number(user.lockedBalance) + cost },
  });

  const order = await prisma.order.create({
    data: {
      userId: userId!,
      stockId: stock.id,
      market: type,
      orderType: side,
      price: orderPrice,
      quantity: qty,
      status: "PENDING",
    },
  });

  return res.status(201).json(order);
};




