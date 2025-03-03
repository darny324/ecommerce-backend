const app = require('express');
const { getAllProducts, getElectronicProducts, getBooksProducts, getSportProducts, getClothingProducts, addProduct, getProduct, updateProduct, deleteProduct } = require('../controllers/products');
const { upload } = require('../multer-config');
const { uploadImages } = require('../middleware/uploadImages');
const router = app.Router();

router.route('/')
.get(getAllProducts)
.get(getElectronicProducts)
.get(getBooksProducts)
.get(getSportProducts)
.get(getClothingProducts)
.post(upload.array('images', 5), uploadImages, addProduct);

router.route('/:id')
.get(getProduct)
.patch(updateProduct)
.delete(deleteProduct);

module.exports = router;