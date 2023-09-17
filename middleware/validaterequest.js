const Joi = require('joi');

const validateRequest = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    const valid = error == null;

    if (valid) {
      next();
    } else {
      const { details, message } = error;
      const messages = details.map(i => i.message).join(",");

      console.log("error", messages);
      res.status(400).json({ error: messages, msg: message });
    }
  };
};

module.exports = validateRequest;