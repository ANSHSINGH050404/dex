import { Router } from "express";
import { authenticate } from "../middleware/auth.js";
import {
  Order,
//   cancelOrder,
//   getOrders,
//   getOrderBook,
} from "../controllers/order.controller.js";


const router = Router();

router.post("/order", authenticate, Order);
// router.delete("/:orderId", cancelOrder);
// router.get("/", getOrders);
// router.get("/orderbook/:symbol", getOrderBook);
export default router;
