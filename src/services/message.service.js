const httpStatus = require('http-status');
const { Message } = require('../models');
const ApiError = require('../utils/ApiError');

const createMessage = async (messageBody) => {
  return Message.create(messageBody);
};

const queryMessage = async (filter, options) => {
  const messages = await Message.paginate(filter, options);
  return messages;
};

const getMessageById = async (id) => {
  return Message.findById(id);
};

const deleteMessageById = async (messageId) => {
  const message = await getMessageById(messageId);
  if (!message) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Message not found');
  }
  await message.remove();
  return message;
};

module.exports = {
  createMessage,
  queryMessage,
  getMessageById,
  deleteMessageById,
};
