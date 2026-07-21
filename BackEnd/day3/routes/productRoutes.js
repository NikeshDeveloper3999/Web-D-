const express = require('express')
const router = express.Router();


const productController = require('../controllers/ProductController')



router.post('/create-product', productController.createProduct)
router.post('/find-product-by-code', productController.findProductByCode)


    

module.exports = router