const OrderModel = require("../models/OrderModel");
class Orders {
  async getOrders(req, res) {
    const { page } = req.params;
    const perPage = 5;
    const skip = (page - 1) * perPage;
    try {
      const count = await OrderModel.find({}).countDocuments();
      const response = await OrderModel.find({})
        .populate(
          "productId",
          "-colors -sizes -createdAt -updatedAt -stock -image2 -image3"
        )
        .populate("userId", "-password -updatedAt -createdAt -admin")
        .skip(skip)
        .limit(perPage)
        .sort({ updatedAt: -1 });
      console.log(response);
      return res.status(200).json({ orders: response, perPage, count });
    } catch (error) {
      console.log(error.message);
    }
  }
  async orderDetails(req, res) {
    const { id } = req.params;
    try {
      const details = await OrderModel.findOne({ _id: id })
        .populate(
          "productId",
          "-colors -sizes -createdAt -updatedAt -stock -image2 -image3"
        )
        .populate("userId", "-password -updatedAt -createdAt -admin");
      return res.status(200).json({ details });
    } catch (error) {
      console.log(error.message);
      return res.status(500).json({ errors: error });
    }
  }
}
module.exports = new Orders();