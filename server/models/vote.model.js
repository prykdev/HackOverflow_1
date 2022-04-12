const { model, Schema } = require('mongoose');

const voteSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'users' },
    voter: { type: Schema.Types.ObjectId, ref: 'users' },
    status: {
        type: Number,
        enums: [
            1,    //Upvote
            0,    //Neutral
            -1,   //Downvote
        ],
        default: 0,
    },
}, { timestamps: true });

model('votes', voteSchema);

module.exports = {
    model: model('votes'),
    schema: voteSchema,
};