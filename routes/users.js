const app = require('express');
const { getAllUsers, signUp, signIn, changePassword, getUser, updateUser, deleteUser, getAuthorizedUser, sentOTP, verifyOTP } = require('../controllers/users');
const authorizationMiddleware = require('../middleware/authorization');

const router = app.Router();


router.route('/').get(getAllUsers);
router.route('/authenticated-user').get(authorizationMiddleware, getAuthorizedUser);
router.route('/send-otp').patch(sentOTP);
router.route('/verify-otp').patch(verifyOTP);
router.route('/auth/sign-up').post(signUp);
router.route('/auth/sign-in').patch(signIn);
router.route('/:id/change-password').patch(changePassword);
router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

module.exports = router;