const { model, Schema } = require('mongoose');

const user = new Schema({
  name: { type: String, required: true },
  username: { type: String, required: true },
  // phone: { type: Number, unique: true, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  friends: [{ type: Schema.Types.ObjectId, ref: 'friends' }],
  socials: {
    github: { type: String, default: "" },
    // codeforces: { type: String, default: "" },
    // hackerearth: { type: String, default: "" },
    // atcoder: { type: String, default: "" },
    // leetcode: { type: String, default: "" },
    codechef: { type: String, default: "" },
    hackerrank: { type: String, default: "" }
  },
  token: { type: String, default: "" }
}, {timestamps: true});

model('users', user);

module.exports = {
  model: model('users'),
  schema: user,
};