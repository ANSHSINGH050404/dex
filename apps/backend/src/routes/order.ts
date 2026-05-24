import { Router } from "express";
import { authenticate } from "../middleware/auth.js";
import {
  Order,
  getOrder,
  cancelOrder,
//   getOrders,
//   getOrderBook,
} from "../controllers/order.controller.js";


const router = Router();

router.post("/order", authenticate, Order);

router.get("/getorders",authenticate, getOrder);
router.delete("/:orderId", cancelOrder);
// router.get("/orderbook/:symbol", getOrderBook);
export default router;
