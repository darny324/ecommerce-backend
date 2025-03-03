// some function to help me 

const { StatusCodes } = require("http-status-codes");
const Products = require("../models/products");
const {BadRequest, CustomError} = require('../errors');
const { generateGeneralFilters, generateAttributeFilters } = require("./methods");

//

const getAllProducts = (req, res) => {
  const {brand, name, generalFilters } = req.query;
  const ob = {};
  if ( brand ) {
    const brandList = brand.split(',');
    ob.brand = {
      $in: [...brandList],
    }
  }

  if ( name ) {
    ob.shortName = {$regex: name, $options: 'i'}; 
  }
  if ( numericFilters ) {
    const options = ['discount', 'price', 'rating'];
    generateGeneralFilters(generalFilters, ob, options);
  }


  const products = Products.find(ob);
  res.status(StatusCodes.OK).json({products: products})
}

const getElectronicProducts = (req, res) => {
  const {
    name, brand, attributeFilters, category, processor, storageType,
    connectivity, operatingSystem, resolution, generalFilters,
  } = req.query; 
  const ob = {};
  if ( name ) ob.shortName = {$regex: name, $options: 'i'}; 
  if ( brand ) ob.brand = brand; 
  if ( attributeFilters ) {
    const options = ['screenSize', 'ram', 'storage', 'batteryLife', 'warranty'];
    generateAttributeFilters(attributeFilters, ob, options);
  }
  if ( generalFilters ){
    const options = ['price', 'rating', 'discount'];
    generateGeneralFilters(generalFilters, ob, options);
  }
  if (category) ob.attributes = {...ob.attributes, category: category};
  if (processor) ob.attributes = {...ob.attributes, processor: processor};
  if (storageType) ob.attributes = {...ob.attributes, storageType: storageType};
  if (connectivity) ob.attributes = {...ob.attributes, connectivity: connectivity};
  if (operatingSystem) ob.attributes = {...ob.attributes, operatingSystem: operatingSystem};
  if (resolution) ob.attributes = {...ob.attributes, resolution: resolution};
  const products = Products.find(ob);
  res.status(StatusCodes.OK).json({products: products});
}

const getBooksProducts = async (req, res) => {
  const {category, genre, author, brand, format,
    generalFilters, name
  } = req.query;

  if ( name ) ob.shortName = {$regex: name, $options: 'i'}; 

  if ( generalFilters ){
    const options = ['price', 'rating', 'discount'];
    generateGeneralFilters(generalFilters, ob, options);
  }

  if (category) ob.attributes = {...ob.attributes, category: category};
  if (genre) ob.attributes = {...ob.attributes, genre: genre};
  if (author) ob.attributes = {...ob.attributes, author: author};
  if (format) ob.attributes = {...ob.attributes, format: format};
  if ( brand ) ob.brand = brand;

  const products = await Products.find(ob);
  res.status(StatusCodes.OK).json({products});
}

const getSportProducts = async (req, res) => {
  const {
    category, brand, sportType, sizes, material, 
    footwareType, generalFilters, colors, name
  } = req.query;

  const ob = {};

  if ( name ) ob.shortName = {$regex: name, $options: 'i'}; 

  if ( generalFilters ){
    const options = ['price', 'rating', 'discount'];
    generateGeneralFilters(generalFilters, ob, options);
  }

  if (category) ob.attributes = {...ob.attributes, category: category};
  if (sportType) ob.attributes = {...ob.attributes, sportType: sportType};
  if (material) ob.attributes = {...ob.attributes, material: material};
  if (footwareType) ob.attributes = {...ob.attributes, footwareType: footwareType};
  if (sizes) ob.options = {...ob.options, sizes: { $in: [...sizes]}};
  if (colors) ob.options = {...ob.options, colors: { $in: [...colors]}};
  if (brand) ob.brand = brand;

  const products = await Products.find(ob);
  res.status(StatusCodes.OK).json({products});
}

const getClothingProducts = async (req, res) => {
  const {
    category, sizes, brand, colors, generalFilters, 
    material, gender, pattern, sleeveLength, occasion, name
  } = req.query;

  const ob = {};

  if ( name ) ob.shortName = {$regex: name, $options: 'i'}; 
  if ( generalFilters ){
    const options = ['price', 'rating', 'discount'];
    generateGeneralFilters(generalFilters, ob, options);
  }

  if (category) ob.attributes = {...ob.attributes, category: category};
  if (gender) ob.attributes = {...ob.attributes, gender: gender};
  if (material) ob.attributes = {...ob.attributes, material: material};
  if (pattern) ob.attributes = {...ob.attributes, pattern: pattern};
  if (sleeveLength) ob.attributes = {...ob.attributes, sleeveLength: sleeveLength};
  if (occasion) ob.attributes = {...ob.attributes, occasion: occasion};
  if (sizes) ob.options = {...ob.options, sizes: { $in: [...sizes]}};
  if (colors) ob.options = {...ob.options, colors: { $in: [...colors]}};
  if (brand) ob.brand = brand;

  const products = await User.find(ob);
  res.status(StatusCodes.OK).json({products});
}

const getProduct = async (req, res) => {
  const {id:productId} = req.params; 
  const product = await Products.findById(productId);
  if ( !product ){
    throw new BadRequest("Product Not Found");
  }
  res.status(StatusCodes.OK).json({product});
}

const addProduct = async (req, res) => {
  const {attributes, name, shortName, description, options, productType, 
    priceInCents, brand, totalStock, features, imageUrls, discount, returnPolicy
  } = req.body;

  const ob = {};
  
  if ( attributes ) ob.attributes = attributes; 
  if ( !name ) throw new BadRequest("Name is not provided");
  ob.name = name; 
  if ( !shortName ) throw new BadRequest("Short Name is not provided");
  ob.shortName = shortName;

  if ( !productType ) throw new BadRequest("product type is not provided");
  ob.productType = productType;

  if ( !priceInCents ) throw new BadRequest("Price is not provided");
  ob.priceInCents = priceInCents;

  if (description) ob.description = description;
  if (options) ob.options = options;
  if (brand) ob.brand = brand; 
  if (totalStock) ob.totalStock = totalStock;
  if (features) ob.features = features;
  if (imageUrls) ob.images = imageUrls;
  if (discount) ob.discount = discount;
  if ( returnPolicy ) ob.returnPolicy = returnPolicy;
  

  const product = await Products.create(ob);
  if ( !product ){
    throw new CustomError("Error in adding a new product");
  }
  res.status(StatusCodes.OK).json({product});
}

const updateProduct = async (req, res) => {
  const {
    priceInCents, discount, totalStock, options, attributes, features, 
    returnPolicy, name, shortName, brand, description
  } = req.body;

  const {id:productId} = req.params;

  const ob = {};
  if ( name ) ob.name = name; 
  if ( shortName ) ob.shortName = shortName; 
  if ( priceInCents ) ob.priceInCents = priceInCents;
  if (description) ob.description = description;
  if (options) ob.options = options;
  if (attributes) ob.attributes = attributes;
  if (brand) ob.brand = brand; 
  if (totalStock) ob.totalStock = totalStock;
  if (features) ob.features = features;
  if (discount) ob.discount = discount;
  if ( returnPolicy ) ob.returnPolicy = returnPolicy;

  const product = await Products.findByIdAndUpdate(productId, ob);
  if ( !product ){
    throw new CustomError("Error in updating a product");
  }
  res.status(StatusCodes.OK).json({product});
}

const deleteProduct = async (req, res) => {
  const {id:productId} = req.params; 
  const product = await Products.findByIdAndDelete(productId);
  if ( !product ){
    throw new CustomError("Error in deleting a product");
  }
  res.status(StatusCodes.OK).json({deletedProduct:product});
}

module.exports = {
  getAllProducts, 
  getElectronicProducts, 
  getBooksProducts, 
  getSportProducts, 
  getClothingProducts, 
  getProduct, 
  addProduct, 
  updateProduct, 
  deleteProduct
}