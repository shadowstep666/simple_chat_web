var mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
    },
    password: {
        type: String,
    },
    avatar: {
        type: String,
        default: 'assets/images/users/default.png',
    },
    refreshToken: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
})

module.exports = mongoose.model('User', userSchema );