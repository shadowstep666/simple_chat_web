var constance =  ('../config/constance');
var User = require('../models/user');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
    try {
        const { username, password } = req.body;
        if (!username) {
            return res.json({
                status: 0,
                message: "Name is required",
            })
        }
        if (!password) {
            return res.json({
                status: 0,
                message: "Password is required",
            })
        }
        let checkUser = await User.findOne({ name: username});
        if (checkUser) {
            return res.json({
                status: 0,
                message: "Account is existed",
            })
        } else {
            var salt = bcrypt.genSaltSync(constance.saltRounds);
            var hashPassword = bcrypt.hashSync(password, salt)

            let createUser = new User({
                name: username,
                password: hashPassword,
            })
            await createUser.save();
            return res.json({
                status: 1,
                message: "Create new account successfully",
            })
        }
    } catch (error) {
        console.log(error);
    }
}

exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;
        if (!username) {
            return res.json({
                status: 0,
                message: "Name is required",
            })
        }
        if (!password) {
            return res.json({
                status: 0,
                message: "Password is required",
            })
        }
        let checkUser = await User.findOne({ 
            name: username, 
        });
        if (!checkUser) {
            return res.json({
                status: 0,
                message: "Account doesn't exist!",
            });
        } else {
            var result = bcrypt.compareSync(password, checkUser.password)
            let user = {
                _id: checkUser._id
            }
            if (result == true) {
                const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '7d'});
                const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);
                
                checkUser.refreshToken = refreshToken;
                await checkUser.save();
                return res.json({
                    status: 1,
                    message: "Login successfully!",
                    accessToken: accessToken,
                    refreshToken: refreshToken,
                })
            } else {
                return res.json({
                    status: 0,
                    message: "Incorrect password",
                })
            }
        }
    } catch (error) {
        console.log(error);
    }
}

exports.refreshToken = async (req, res) => {
    try {
        const refreshToken = req.body.token;
        if (refreshToken == null) {
            return res.json({
                status: 0,
                message: "Token is required",
            })
        } else {
            let checkUser = await User.findOne({ refreshToken: refreshToken })
            if (!checkUser) {
                res.json({
                    status: 0,
                    message: "Token isn't valid",
                });
            } else {
                jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
                    if (err) {
                        return res.json({
                            status: 0,
                            message: err,
                        })
                    }
                    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '1 days'});
                    return res.json({
                        status: 1,
                        accessToken: accessToken,
                    })
                })
            }
        }
    } catch (error) {
        console.log(error)
    }
}

exports.logout = async (req, res) => {
    try {
        let refreshToken = req.body.token;
        let checkUser = await User.findOne({refreshToken: refreshToken});
        if (!checkUser) {
            return res.json({
                status: 0,
                message: "Unknown Error!",
            })
        }
        await User.update(
            { refreshToken: refreshToken },
            { $unset: { refreshToken: "" } },
        );

        return res.json({
            status: 1,
            message: "Logout successfully!",
        })
    } catch (error) {
        console.log(error);
    }
}

exports.getProfile = async (req, res) => {
    try {
        let checkUser = await User.findById(req.user._id);
        if (checkUser) {
            return res.json({
                status: 1,
                user: checkUser.toJSON(),
            });
        }
        return res.json({
            status: 0,
            message: "Account doesn't exist",
        })
    } catch (error) {
        console.log(error);
    }
}