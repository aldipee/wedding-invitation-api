const httpStatus = require('http-status');
const pick = require('../utils/pick');
const catchAsync = require('../utils/catchAsync');
const { messageService } = require('../services');

const createMessage = catchAsync(async (req, res) => {
  const user = await messageService.createMessage(req.body);
  res.status(httpStatus.CREATED).send(user);
});

const getMessages = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'role']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await messageService.queryMessage(filter, options);
  res.send(result);
});

const deleteMessage = catchAsync(async (req, res) => {
  await messageService.deleteMessageById(req.params.messageId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createMessage,
  getMessages,
  deleteMessage,
};
