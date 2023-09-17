const Joi = require('joi');

const productSchema = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().required(),
  description: Joi.string(),
  category: Joi.string(),
  brand: Joi.string(),
  quantity: Joi.number().default(1)
});

module.exports = productSchema;
