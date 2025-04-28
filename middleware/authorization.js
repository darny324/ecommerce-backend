const { Unauthorized } = require("../errors");
const jwt = require('jsonwebtoken')

const authorizationMiddleware = async (req, res, next) => {
  const authorization = req.headers.authorization; 
  if ( !authorization || authorization.startsWith('Bearer ')){
    new Unauthorized("ERROR IN AUTHORIZATION::NO token found");
  }
  
  try {
    const token = authorization.split(' ')[1];
    const {userId} = jwt.verify(token, process.env.JWT_SECRET);
    req.user = {userId};
    next();
  } catch (err) { 
    throw new Unauthorized("ERROR IN AUTHORIZATION::validation error");
  }
}

module.exports = authorizationMiddleware;