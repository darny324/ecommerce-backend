

const generateOTP = () =>  {
  return Math.round((100000 + Math.random() * 900000)).toString();
}




module.exports = {
  generateOTP, 
}