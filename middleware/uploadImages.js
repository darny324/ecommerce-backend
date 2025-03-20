const {BadRequest} = require('../errors');
const cloudinary = require('../cloudinary-config');
const { Promise } = require('mongoose');

const uploadImages = async (req, res, next) => {
  if ( !req.files || req.files.length === 0 ){
    return next();
  }

  try {
    const promises = req.files.map((file) => {
      return cloudinary.uploader.upload(file.path, {folder: 'my_folder'});
    })

    const results = await Promise.all(promises);
    const imgUrls = results.map((res) => res.secure_url);
    req.body.imgUrls = imgUrls;
    next();
  } catch (err) {
    throw new BadRequest('Error in uploading images');
  }
}

module.exports = {uploadImages}