const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
  country: {type: String}, 
  state: {type: String}, 
  city: {type: String}, 
}, {_id: false});

const userSchema = new mongoose.Schema({
  name: {
    type: String, 
    required: [true, "user name must be providd"], 
  }, 
  address: addressSchema, 
  password: {
    type: String, 
    required: [true, 'Please provide a password']
  }, 
  email: {
    type: String, 
    required: [true, 'Please provide email'], 
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 
      'Please provide valid email'
    ],
    unique: true, 
  },
  cart: [
    {
      _id: false,
      productId: {type:mongoose.Types.ObjectId, required: [true, 'Product Id is necessar']}, 
      optionNum: {type: Number, default: -1},
      billingAddress: addressSchema, 
      price: {type:Number, required:true}, 
      quantity: {type:Number, default: 1}, 
      paymentMethod: {
        type:String, 
        enum: ["paypal", "credit-card"], 
        default: "credit-card", 
      }, 
    }
  ], 
  record: [
    {
      productId: {type:mongoose.Types.ObjectId, required: [true, 'Product Id is necessar']}, 
      optionNum: {type:Number, default: -1},
      billingAddress: addressSchema, 
      price: {type:Number, required:true}, 
      quantity: {type:Number, default: 1}, 
      paymentMethod: {
        type:String, 
        enum: ["paypal", "credit-card"], 
        default: "credit-card", 
      }, 
    }
  ]
})



const Users = mongoose.model('users', userSchema);
module.exports = Users;