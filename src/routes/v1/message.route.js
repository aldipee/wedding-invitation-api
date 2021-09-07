const express = require('express');
const validate = require('../../middlewares/validate');
const messageValidation = require('../../validations/message.validation');
const messageController = require('../../controllers/message.controller');

const router = express.Router();

router
  .route('/')
  .post(validate(messageValidation.createMessage), messageController.createMessage)
  .get(validate(messageValidation.getMessage), messageController.getMessages);

module.exports = router;
