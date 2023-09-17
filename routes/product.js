const express = require('express');
const router = express.Router() ; 
const {createProduct , getProducts}= require("../controllers/product");
const validateRequest = require('../middleware/validaterequest');
const productSchema = require('../validation/product');
const auth = require('../middleware/auth');




router.post("/createproduct" ,validateRequest(productSchema), auth ,  createProduct);
router.get ("/products" ,auth ,  getProducts);



module.exports = router ; 