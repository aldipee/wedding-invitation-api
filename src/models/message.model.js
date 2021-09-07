const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const messageSchema = mongoose.Schema(
  {
    guestName: {
      type: String,
      unique: false,
      trim: true,
    },
    message: {
      type: String,
      trim: true,
      unique: false,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
messageSchema.plugin(toJSON);
messageSchema.plugin(paginate);

/**
 * @typedef User
 */
const User = mongoose.model('Message', messageSchema);

module.exports = User;
