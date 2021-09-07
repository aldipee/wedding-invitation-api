const Joi = require('joi');

const createMessage = {
  body: Joi.object().keys({
    guestName: Joi.string().required(),
    message: Joi.string().required(),
  }),
};

const getMessage = {
  query: Joi.object().keys({
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

module.exports = {
  createMessage,
  getMessage,
};
