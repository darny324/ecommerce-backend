// some function to help me 

const { StatusCodes } = require("http-status-codes");
const Products = require("../models/products");
const {BadRequest, CustomError} = require('../errors');

//

const getAllProducts = async (req, res) => {
  const {name, numericFilters, 
    brands, releaseYear, warranty, processor, ram, storage, batteryLife, 
    chargingType, resolution, material, category, sortBy
  } = req.query;
  const ob = {};

  if ( name ) {
    ob.shortName = {$regex: name, $options: 'i'}; 
  }

  if (brands) {
    const b = brands.split(','); 
    ob['attributes.brand'] = { $regex: [...b], $options: 'i'}
  };
  if (releaseYear) { ob['attributes.releaseYear'] = releaseYear };
  if (warranty) { ob['attributes.warranty'] = { $regex: warranty, $options: 'i'}};
  if (processor) { ob['attributes.processor'] = { $regex: processor, $options: 'i'}};
  if (ram) { ob['attributes.ram'] = { $regex: ram, $options: 'i'}};
  if (storage) { ob['attributes.storage'] = { $regex: storage, $options: 'i'}};
  if (batteryLife) { ob['attributes.batteryLife'] = { $regex: batteryLife, $options: 'i'}};
  if (chargingType) { ob['attributes.chargingType'] = { $regex: chargingType, $options: 'i'}};
  if (resolution) { ob['attributes.resolution'] = { $regex: resolution, $options: 'i'}};
  if (material) { ob['attributes.material'] = { $regex: material, $options: 'i'}};
  if (category) { 
    ob.category = {$regex: category, $options: 'i'};
  }

  if ( numericFilters ) {
    const options = ['discount', 'price', 'rating'];
    const regEx = /\b(<|>|>=|=|<=)\b/g;
    const operatorMap = {
      '<': '$lt', 
      '>': '$gt', 
      '>=': '$gte', 
      '=': '$eq', 
      '<=': '$lte'
    };

    const filters = numericFilters.replace(regEx, 
      (match) => `-${operatorMap[match]}-`
    )
  
    filters.split(',').map((filter) => {
      const [field, operator, value] = filter.split('-');
      if ( options.includes(field)){
        ob[field] = { [operator]: Number(value)};
      }
    })
  }

  const page = req.query.page ? Number(req.query.page) : 1;
  const limit = req.query.limit ? Number(req.query.limit) : 5;

  const skip = (page - 1) * limit;

  const products = await Products.find(ob).skip(skip).limit(limit).sort(sortBy);
  res.status(StatusCodes.OK).json({products: products})
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
  const {attributes, name, shortName, description, options, category, 
    price, quantity, features, images, discount, returnPolicy, reviews
  } = req.body;

  const ob = {};
  
  if ( attributes ) ob.attributes = attributes; 
  if ( !name ) throw new BadRequest("Name is not provided");
  ob.name = name; 
  if ( !shortName ) throw new BadRequest("Short Name is not provided");
  ob.shortName = shortName;

  

  if ( !category ) throw new BadRequest("product type is not provided");
  ob.category = category;

  if ( !price ) throw new BadRequest("Price is not provided");
  ob.price = price;

  if (description) ob.description = description;
  if (options) ob.options = options;
  if (quantity) ob.quantity = quantity;
  if (features) ob.features = features;
  if (images) ob.images = images;
  if (discount) ob.discount = discount;
  if ( returnPolicy ) ob.returnPolicy = returnPolicy;

  if ( reviews ){
    ob.reviews = reviews;
    ob.totalReviews = reviews.length();
    let sum;
    for ( let i = 0; i < reviews.length(); i++ ){
      sum += reviews[i].rating;
    }
    ob.rating = sum/reviews.length();
  }



  const product = await Products.create(ob);
  if ( !product ){
    throw new CustomError("Error in adding a new product");
  }
  res.status(StatusCodes.OK).json({product});
}

const updateProduct = async (req, res) => {
  const {
    price, discount, quantity, options, attributes, features, 
    returnPolicy, name, shortName, category, description, review, 
    rating, totalReviews
  } = req.body;

  const {id:productId} = req.params;

  const ob = {};
  if ( name ) ob.name = name; 
  if ( shortName ) ob.shortName = shortName; 
  if ( price ) ob.price = price;
  if (description) ob.description = description;
  if (options) ob.$push = {...ob.$push, options: [...options]};
  if (attributes) ob.attributes = attributes;
  if (quantity) ob.quantity = quantity;
  if (category) ob.category = category;
  if (features) ob.$push = {...ob.$push, features: [...features]};
  if (discount) ob.discount = discount;
  if ( returnPolicy ) ob.returnPolicy = returnPolicy;
  if ( review ){
    ob.$push = {
      reviews: review,
    }
    ob.rating = rating;
    ob.totalReviews = totalReviews;
  }

  const product = await Products.findByIdAndUpdate(productId, ob, {new:true});
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
  getProduct, 
  addProduct, 
  updateProduct, 
  deleteProduct
}