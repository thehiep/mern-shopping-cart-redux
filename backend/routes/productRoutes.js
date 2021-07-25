const express = require('express');

const router = express.Router();
const { getAllProudcts, getProductById } = require('../controller/productController');

//@desc GET all products from db
//@route GET /api/products
//@access Public
router.get('/', getAllProudcts)

//@desc GET a products from id
//@route GET /api/:id
//@access Public
router.get('/:id', getProductById)


module.exports = router;