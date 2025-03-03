const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String, 
    required: [true, 'Product name not provided'], 
    min: 3
  }, 
  shortName: {
    type: String, 
    required: [true, 'short name for product not provided'], 
  }, 
  productType: {
    type: String, 
    enum: ['electronics', 'clothes', 'sports', 'books'], 
    required: [true, 'product type not provided']
  }, 
  priceInCents: {
    type: Number, 
    required: [true, 'price not provided'], 
  }, 
  brand: {
    type: String, 
  }, 
  discount: {
    type: Number, 
    default: 0, 
  }, 
  totalStock: {
    type: Number, 
    default: 0, 
  }, 
  options: [
    {
      types: mongoose.Schema.Types.Mixed, 
    }
  ], 
  ratings: {
    type: Number, 
    default: 0, 
  }, 
  reviews: [
    {
      userName: {type:String, required: true}, 
      userId: {type:mongoose.Types.ObjectId, required: true}, 
      review: {type:String}
    }
  ], 
  totalReviews: {type:Number, default: 0}, 
  features: {type:mongoose.Schema.Types.Mixed}, 
  attributes: {type:mongoose.Schema.Types.Mixed}, 
  description: {type: String}, 
  returnPolicy: {type:String}, 
  images: [String], 
})

const Products = mongoose.model('products', productSchema);
module.exports = Products; 