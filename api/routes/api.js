require('dotenv').config();

var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

var userController = require('../controllers/userController');
var messageController = require('../controllers/messageController');

function authToken(req, res, next) {
    const accessToken = req.headers['accesstoken'] || req.query.accessToken;
    if (accessToken == null) {
        return res.json({
            status: 0,
        });
    }
    jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) {
            return res.json({
                status: 0,
            });
        }
        req.user = user;
        next()
    })
}

router.get('/profile', authToken, userController.getProfile);

router.post('/login', userController.login);

router.post('/register', userController.register);

router.post('/token', userController.refreshToken);

router.post('/logout', userController.logout);

router.get('/users', authToken, userController.getListUser);

router.get('/users/:id', authToken, userController.getUserDetail);

router.get('/messages/:id', authToken, messageController.getMessages);

module.exports = router;