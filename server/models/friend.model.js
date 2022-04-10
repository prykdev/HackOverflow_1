const { model, Schema } = require('mongoose');

const friend = new Schema({
  requester: { type: Schema.Types.ObjectId, ref: 'users' },
  recipient: { type: Schema.Types.ObjectId, ref: 'users' },
  status: {
    type: Number,
    enums: [
      0,    //'add friend', -> rejected
      1,    //'requested',
      2,    //'pending',
      3,    //'friends' -> accepted
    ]
  }
}, { timestamps: true });
model('friends', friend);

module.exports = {
  model: model('friends'),
  schema: friend,
};

// addFriend: create
// 