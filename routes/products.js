const app = require('express');
const { 
    getAllProducts, addProduct, getProduct, updateProduct, deleteProduct,
    purchaseProducts,
} = require('../controllers/products');
const { upload } = require('../multer-config');
const { uploadImages } = require('../middleware/uploadImages');
const router = app.Router();

router.route('/')
.get(getAllProducts)
.post(upload.array('images', 5), uploadImages, addProduct);

router.route('/:id')
.get(getProduct)
.patch(updateProduct)
.delete(deleteProduct);

router.route('/create-checkout-session').patch(purchaseProducts);


module.exports = router;