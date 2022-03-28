const { model, Schema } = require('mongoose');

const rating = new Schema({
    userId: { type: String, required: true },
    upvotes: [{
        userId: { type: String, required: true },
        time: { type: String, required: true },
    }],
    downvotes: [{
        userId: { type: String, required: true },
        time: { type: String, required: true },
    }],
    rating: { type: String, default: "100" },
});

model('rating', rating);

module.exports = {
    model: model('rating'),
    schema: rating,
    signUpSchema,
    loginSchema,
};