const jwt = require("jsonwebtoken");


const sign = (payload, options = { expiresIn: process.env.TOKEN_EXPIRY_HOUR + "h" }) => {
  return jwt.sign(payload,process.env.SECRET, options);
};

const verify = (token) => {
  try {
    const decoded = jwt.verify(token,process.env.SECRET);
    return { valid: true, expired: false, decoded };
  } catch (error) {
    console.log("token", token, { error });
    let msg;
    if (error instanceof Error) {
      msg = error.message;
    } else {
      msg = error;
    }
    return {
      valid: false,
      expired: msg === "jwt expired",
      msg: msg,
      decoded: null,
    };
  }
};



module.exports = { sign, verify};