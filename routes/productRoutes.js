const express = require("express");
const router = new express.Router();
const productValidations = require("../validations/productValidations");
const Product = require("../controllers/Product");
const HomeProducts = require("../controllers/HomeProducts");
const Authorization = require("../servicess/Authorization");
router.post('/create-product',[Authorization.authorized], Product.create);
router.get('/products/:page',Authorization.authorized, Product.get);
router.get('/product/:id', Product.getProduct);
router.put('/product', [Authorization.authorized, productValidations], Product.updateProduct);
router.delete('/delete/:id', Authorization.authorized, Product.deleteProduct);
router.get("/cat-products/:name/:page?", HomeProducts.catProducts);
router.get("/search-products/:keyword/:page?", HomeProducts.catProducts);
module.exports = router;