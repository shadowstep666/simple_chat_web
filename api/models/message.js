var mongoose = require('mongoose');

const Schema = mongoose.Schema;

const messageSchema = new Schema({
    sender: {
        type: String,
    },
    receiver: {
        type: String,
    },
    content: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
})

module.exports = mongoose.model('Message', messageSchema );