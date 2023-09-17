const Joi = require('joi');

const userSchema = Joi.object({
  name: Joi.string().required(),
  username: Joi.string().allow(null),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
  mobile: Joi.string().allow(null),
  country_code: Joi.string().allow(null),
  date_of_birth: Joi.date().allow(null),
  status: Joi.number().integer().default(1)
});

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
});



module.exports = {userSchema , loginSchema };