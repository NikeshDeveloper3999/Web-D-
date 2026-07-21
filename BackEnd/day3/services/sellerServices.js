const mongoose = require('mongoose');
const sellerModel = require("../models/sellerModel");
const productModel = require('../models/ProductModel') ;


const findSeller = async (query) => {
  return await sellerModel.findOne({
    $or: [
      { email: query.email },
      { mobile_number: query.mobile },
      { gst_number: query.gst },
    ],
  });
};


const getAllProducts = async (id) => {
    const products = await productModel.aggregate([
        {
            $match:{product_sellers: new mongoose.Types.ObjectId(id)}
        },
        {
            $lookup: {
                from:'sellers',
                localField:'product_sellers',
                foreignField: '_id',
                as:'sellerDetails'
            }
        }
    ])
    console.log(products)
    return products
}



module.exports = {findSeller, getAllProducts}