// some function to help me 

const { StatusCodes } = require("http-status-codes");
const Products = require("../models/products");
const {BadRequest, CustomError} = require('../errors');
const { generateGeneralFilters, generateAttributeFilters } = require("./methods");

//



const getAllProducts = async (req, res) => {
  const {name, generalFiltersname, brand, category, processor, storageType,
    operatingSystem, resolution, generalFilters,
    ram, storage, batteryLife 
  } = req.query;
  
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
  if ( generalFilters ) {
    const options = ['discount', 'priceInCents', 'ratings'];
    const filters = generalFilters.replace(regEx, 
      (match) => `-${operatorMap[match]}-`
    )
  
    filters.split(',').forEach((filter) => {
      const [field, operator, value] = filter.split('-');
      
      if ( options.includes(field)){
        ob[field] = { [operator]: Number(value)};
      }
    })
  }

  const page = Number(req.query.page) || 1; 
  const limit = Number(req.query.limit) || 8; 
  const skip = (page - 1) * limit;

  const totalProducts = await Products.countDocuments(ob);
  const totalPages = Math.ceil(totalProducts/limit);

  const products = await Products.find(ob).skip(skip).limit(limit).sort({shortName:1});
  
  res.status(StatusCodes.OK).json({
    totalPages, 
    count:products.length, 
    products: products, 
  });
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
  const {
    attributes, name, shortName, description, options, 
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
  getProduct, 
  addProduct, 
  updateProduct, 
  deleteProduct
}