const { Unauthorized } = require("../errors");
const jwt = require('jsonwebtoken')

const authorizationMiddleware = (req, res, next) => {
  const authorization = req.headers.authorization; 
  if ( !authorization || authorization.startsWith('Bearer ')){
    new Unauthorized("ERROR IN AUTHORIZATION::NO token found");
  }
  
  try {
    const token = authorization.split(' ')[1];
    const {userId, name} = jwt.verify(token, process.env.JWT_SECRET);
    req.user = {userId, name};
    next();
  } catch (err) { 
    throw new Unauthorized("ERROR IN AUTHORIZATION::validation error");
  }
}

module.exports = authorizationMiddleware;