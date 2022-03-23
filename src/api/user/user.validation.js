import Joi from 'joi';

export function validateUser(user) {
  const schema = Joi.object().keys({
    email: Joi.string()
      .email()
      .required(),
    password: Joi.string()
      .min(6)
      .max(10)
      .required()
  });
  const { error, value } = schema.validate(user);
  if (error && error.details) {
    return { error };
  }
  return { value };
}