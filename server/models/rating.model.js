const { model, Schema } = require('mongoose');

const rating = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'users' },
    votes: [{
        userId: { type: Schema.Types.ObjectId, ref: 'users' },
        upVote : {type: Boolean, default: false},
        downVote : {type: Boolean, default: false},
        time: { type: String, required: true },
    }],
    score: { type: String, default: "100" },
}, {timestamps: true});

model('ratings', rating);

module.exports = {
    model: model('ratings'),
    schema: rating,
};