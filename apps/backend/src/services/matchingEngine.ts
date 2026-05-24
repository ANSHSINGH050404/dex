import { prisma } from "../lib/prisma.js";

export const matchingEngine = (orderId: string) => {
  const marketType = prisma.order.findUnique({
    where: { id: orderId },
    select: { market: true },
  });

  const bidType = prisma.order.findUnique({
    where: { id: orderId },
    select: { orderType: true },
  });

  return { marketType, bidType };
};

console.log(matchingEngine("cmpihbjom0000noumdom08v2p").toString());
