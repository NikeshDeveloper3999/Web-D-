const mongoose = require('mongoose')
const productModel = require('../models/ProductModel')

const findProduct = async ( product_code ) => {
   return await productModel.findOne({ product_code: product_code })
}

module.exports = {findProduct}