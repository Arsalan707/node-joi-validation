const Joi = require('joi');

const schema = Joi.object({
  name: Joi.string().alphanum().min(3).max(30).required(),

  email: Joi.string().email().required(),

  // minDomainSegments: 2,                   email some other validation
  // tlds: { allow: ['com', 'net'] },

  password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),

  repeat_password: Joi.ref('password'),

  birth_year: Joi.number().integer().min(1900).max(2013),
});
//   .with('username', 'birth_year')
//   .xor('password', 'access_token')
//   .with('password', 'repeat_password');

// schema.validate({ username: 'abc', birth_year: 1994 });
// // -> { value: { username: 'abc', birth_year: 1994 } }
module.exports = schema;
