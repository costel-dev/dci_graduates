const Joi = require("joi");

const validate = {};
// ### USER ###
validate.userSchema = Joi.object({
  name: Joi.string().alphanum().min(3).max(30).required(),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    })
    .required(),
  password: Joi.string()
    .min(6)
    .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
    .required(),
  password2: Joi.ref("password"),
});

// ### Company ###
validate.companySchema = Joi.object({
  username: Joi.string().alphanum().min(3).max(30).required(),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    })
    .required(),
  password: Joi.string()
    .min(6)
    .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
    .required(),
  password2: Joi.ref("password"),
}).with("password", "password2");

module.exports = validate;
