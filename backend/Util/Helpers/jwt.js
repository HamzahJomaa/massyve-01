require('dotenv').config()
const jwt = require("jsonwebtoken");

const prepareJWTPayload = (user) => {
  return {
    user: {
      id:user._id,
      username: user.username,
    },
  };
};


const generateJWT = (user) => {
  const JWT_SECRET = process.env.JWT_SECRET || "TEST_APP";
  const jwtData = prepareJWTPayload(user);
  jwtData.expiry = new Date().getTime() + 3600 * 24;
  const jsonToken = jwt.sign(jwtData, JWT_SECRET);
  return jsonToken;
};


const verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET || "TEST_APP")
}

module.exports = {
  generateJWT,
  verifyToken,
};