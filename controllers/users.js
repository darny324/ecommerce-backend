const { StatusCodes } = require("http-status-codes");
const { BadRequest, Unauthorized } = require("../errors");
const Users = require("../models/users");
const bcrypt = require('bcryptjs');
const { generateOTP } = require("./methods");
const {client} = require("../redis");
const transport = require("../nodemailer");
const jwt = require('jsonwebtoken')



const signIn = async (req, res) => {
  const {email, password} = req.body; 
  const user = await Users.findOne({email:email});
  if (!user) {
    throw new BadRequest('User not found');
  }
  const valid = await bcrypt.compare(user.password, password);
  if (!valid){
    throw new BadRequest('Password not correct');
  }
  const token = jwt.sign(
    {userId:user._id, name:user.name},
    process.env.JWT_SECRET, 
    {expiresIn: process.env.JWT_LIFETIME}
  );

  res.status(StatusCodes.OK).json({message: 'successful', user: user, token:token});
}

const signUp = async (req, res) => {
  const {email, name, 
    password, country, state, city
  } = req.body;


  if ( !name) 
    throw new BadRequest('user name is not provided');
  if ( !email)
    throw new BadRequest('Email not provided');
  if ( password)
    throw new BadRequest('Password not provided');
  if ( !country)
    throw new BadRequest('Country not provided');
  if ( !state)
    throw new BadRequest('state not provided');
  if ( !city)
    throw new BadRequest('city not provided');

  const salt = await bcrypt.genSalt(10);
  const hashPassowrd = await bcrypt.hash(password, salt);
  const user = await Users.create({
    name, 
    email, 
    password:hashPassowrd, 
    address: {
      country, state, city
    }, 
  });

  const token = jwt.sign(
    {userId:user._id, name:user.name}, 
    process.env.JWT_SECRET, 
    {expiresIn:process.env.JWT_LIFETIME}
  );

  res.status(StatusCodes.OK).json({message:"User successfully created", 
    user: user, 
    token: token, 
  });
}

const changePassword = async (req, res) => {
  const {oldPassword, newPassword} = req.body; 
  const {id:userId} = req.params; 
  if ( !oldPassword || !newPassword){
    throw new BadRequest("Password must be provided to change password");
  }
  const user = await Users.findById(userId);
  const valid = await bcrypt.compare(oldPassword, user.password);
  if ( !valid ){
    throw new BadRequest("Password is not correct");
  }
  const salt = await bcrypt.genSalt(10);
  const newHashPassword = await bcrypt.hash(newPassword, salt);
  user.password = newHashPassword;
  await user.save();
  res.status(StatusCodes.OK).json({message:"success", user:user});
}

const sentOTP = async (req, res) => {
  const {email} = req.body;
  const otp = generateOTP();
  if ( !email )
    throw new BadRequest("EMAIL must be provided");
  client.set(email, otp, {EX:2 * 60});
  const info = await transport.sendMail({
    from: `ShopSphere <${process.env.EMAIL}>`, 
    to: email, 
    subject: 'Verification OTP', 
    html: `Your otp code is <b>${otp}</b> </br> The otp will expire in two minutes`, 
  });
  res.status(StatusCodes.OK).json({info: info, message: 'success'});
}

const verifyOTP = async (req, res) => {
  const {otp, email} = req.body; 
  if ( !otp ) 
    throw new BadRequest("OTP must me provided:verify OTP");
  if ( !email) 
    throw new BadRequest("EMAIL must be provided:verify otp");
  const storedOTP = await client.get(email);
  if ( !storedOTP || storedOTP !== otp) {
    throw new BadRequest("otp is either invalid or expired");
  }
  res.status(StatusCodes.OK).json({verified:true, message: "Verification successful"});

}

const getAuthorizedUser = async (req, res) => {
  const {userId, name} = req.user;
  const user = await Users.findById(userId);
  if ( !user ){
    throw new Unauthorized("User not found by userId");
  }
  res.status(StatusCodes.OK).json({user});
}

const getAllUsers = async (req, res) => {
  const {name, country, state, city, email} = req.query; 
  const ob = {};
  if ( name )ob.name = { $regex: name, $options: 'i'};
  if ( country )ob.address = {...ob.address, country}; 
  if ( state ) ob.address = {...ob.address, state};
  if ( city )ob.address = {...ob.address, city};
  if ( email ) ob.email = email;
  const users = await Users.find(ob);
  res.status(StatusCodes.OK).json({users:users});
}

const getUser = async (req, res) => {
  const {id:userId} = req.params;

  const user = await Users.findById(userId);
  if ( !user ){
    throw new BadRequest("user ID invalid");
  }
  res.status(StatusCodes.OK).json({user:user});
}

const updateUser = async (req, res) => {
  const {id:userId} = req.params; 
  const {name, email, country, state, city, cart, record} = req.body; 
  
  const ob = {};
  if ( name ) ob.name = name;
  if ( email ) ob.email = email;
  if ( country) ob.address = {...ob.address, country};
  if ( state) ob.address = {...ob.address, state};
  if ( city) ob.address = {...ob.address, city};
  if ( cart) ob.cart = {$push: cart};
  
  const user = await Users.findByIdAndUpdate(userId, ob);
  if ( !user ){
    throw new BadRequest("ERROR IN UPDATING USER");
  }
  res.status(StatusCodes.OK).json({updatedUser:user});
}

const deleteUser = async (req, res) => {
  const {id:userId} = req.params; 
  const user = await Users.findByIdAndDelete(userId);
  if ( !user ){
    throw new BadRequest("ERROR IN DELETING USER");
  }
  res.status(StatusCodes.OK).json({deletedUser:user});
}

module.exports = {
  signUp, signIn, getAllUsers, getUser, updateUser, deleteUser, 
  verifyOTP, sentOTP, changePassword, getAuthorizedUser
}