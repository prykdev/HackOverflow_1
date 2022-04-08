const { model, Schema } = require('mongoose');

const friend = new Schema({
    requester: { type: Schema.Types.ObjectId, ref: 'users'},
    recipient: { type: Schema.Types.ObjectId, ref: 'users'},
    status: {
      type: Number,
      enums: [
          0,    //'add friend',
          1,    //'requested',
          2,    //'pending',
          3,    //'friends'
      ]
    }
  }, {timestamps: true})
  module.exports = mongoose.model('friends', friend)

module.exports = {
    model: model('friends'),
    schema: friend,
};