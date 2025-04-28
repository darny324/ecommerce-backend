const mongoose = require('mongoose');

const electronicsAttributesSchema = new mongoose.Schema({
  brand: String, // e.g., "Apple", "Samsung"
  modelNumber: String, // e.g., "iPhone 14 Pro Max"
  releaseYear: Number, // e.g., 2024
  warranty: String, // e.g., "1 year", "2 years"
  
  // Technical specifications
  processor: String, // e.g., "Intel Core i7", "Snapdragon 8 Gen 2"
  ram: String, // e.g., "16GB", "8GB LPDDR5"
  storage: String, // e.g., "512GB SSD", "1TB HDD"
  batteryLife: String, // e.g., "10 hours", "5000mAh"
  chargingType: String, // e.g., "USB-C", "Wireless Charging"

  // Display & Graphics
  resolution: String, // e.g., "1920x1080", "4K UHD"
  refreshRate: String, // e.g., "60Hz", "120Hz"
  graphicsCard: String, // e.g., "NVIDIA RTX 4060", "AMD Radeon 6800M"

  // Connectivity
  
  // Camera & Audio
  audioTechnology: String, // e.g., "Dolby Atmos", "Stereo Speakers"

  // Build & Design
  material: String, // e.g., "Aluminum", "Glass", "Carbon Fiber"

}, {_id: false});

const productSchema = new mongoose.Schema({
  name: {
    type: String, 
    required: [true, 'Product name not provided'], 
    min: 3
  }, 
  category: {
    type: String,
    enum: [
      'desktops & laptops',  
      'gaming consoles',  
      'smartphones & tablets',  
      'televisions & monitors',  
      'audio devices',  
      'wearable tech',  
      'computer accessories'
    ]
  }, 
  shortName: {
    type: String, 
    required: [true, 'short name for product not provided'], 
  }, 
  price: {
    type: Number, 
    required: [true, 'price not provided'], 
  }, 
  discount: {
    type: Number, 
    default: 0, 
  }, 
  quantity: {
    type: Number, 
    default: 0, 
  }, 
  options: [
    {
      label: String, 
      price: Number, 
      quantity: Number, 
      _id: false
    }
  ], 
  rating: {
    type: Number, 
    default: 0, 
  }, 
  reviews: [
    {
      userName: {type:String, required: true}, 
      userId: {type:mongoose.Types.ObjectId, required: true}, 
      review: {type:String}, 
      rating: {type:Number}, 
      _id: false,
    }
  ], 
  totalReviews: {type:Number, default: 0}, 
  features: [String], 
  attributes: electronicsAttributesSchema, 
  description: {type: String}, 
  returnPolicy: {type:String}, 
  images: [String], 
})

const Products = mongoose.model('products', productSchema);
module.exports = Products; 