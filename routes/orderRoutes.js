const { Router } = require("express");
const Orders = require("../controllers/Orders");
const Authorization = require("../servicess/Authorization");
const router = Router();
router.get("/orders/:page", Authorization.authorized, Orders.getOrders);
router.get("/order-details/:id", Authorization.authorized, Orders.orderDetails);
module.exports = router;