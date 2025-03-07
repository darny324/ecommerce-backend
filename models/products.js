const mongoose = require('mongoose');

const electronicsAttributesSchema = new mongoose.Schema({
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
  modelNumber: String, // e.g., "iPhone 14 Pro Max"
  releaseYear: {type:String, required: [true, 'you must provide the release year']}, // e.g., 2024
  warranty: String, // e.g., "1 year", "2 years"
  
  // Technical specifications
  processor: String, // e.g., "Intel Core i7", "Snapdragon 8 Gen 2"
  ram: String, // e.g., "16GB", "8GB LPDDR5"
  storage: String, // e.g., "512GB SSD", "1TB HDD"
  batteryLife: String, // e.g., "10 hours", "5000mAh"
  chargingType: String, // e.g., "USB-C", "Wireless Charging"

  // Display & Graphics
  screenSize: String, // e.g., "6.7-inch", "15.6-inch"
  resolution: String, // e.g., "1920x1080", "4K UHD"
  refreshRate: String, // e.g., "60Hz", "120Hz"
  touchscreen: Boolean, // true / false
  graphicsCard: String, // e.g., "NVIDIA RTX 4060", "AMD Radeon 6800M"

  // Connectivity
  connectivity: [String], // e.g., ["WiFi 6", "Bluetooth 5.3", "5G"]
  ports: [String], // e.g., ["USB-C", "HDMI 2.1", "Thunderbolt 4"]
  
  // Camera & Audio
  cameraResolution: String, // e.g., "108MP", "12MP Dual"
  frontCamera: String, // e.g., "32MP"
  microphoneType: String, // e.g., "Noise Cancelling", "Omni-directional"
  audioTechnology: String, // e.g., "Dolby Atmos", "Stereo Speakers"


  // Build & Design
  material: String, // e.g., "Aluminum", "Glass", "Carbon Fiber"
  weight: String, // e.g., "1.2kg", "500g"
  waterResistance: String, // e.g., "IP67", "IPX5"

  // Additional Features
  specialFeatures: [String], // e.g., ["Fingerprint Sensor", "Face Unlock"]
}, {_id:false});


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
      name: String, 
      inStock: { type: Number, default: 0}, 
      priceInCents: {type: Number}, 
      availableColors: [String], 
      availableSizes: [String], 
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
      review: {type:String}, 
      rating: {type:Number}, 
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