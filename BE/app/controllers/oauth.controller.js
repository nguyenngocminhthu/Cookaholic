const db = require('../models');
const User = db.user

const passport = require("passport")
const jwt = require("jsonwebtoken")
const config = require("../config/auth.config")

exports.google = (req, res) => {
    // Successful authentication, redirect home.
    const user = req.user
    User.findOne({
        googleId: user.googleId
    })
        // Ket voi du lieu ben collection roles
        .populate("roles")
        .exec(async (err, user) => {
            if (err) {
                res.status(500).json({ message: err, success: false });
                return
            }

            // Tao ma token
            var token = jwt.sign({ id: user._id }, config.secret, {
                // expiresIn: 86400
                expiresIn: config.jwtExpiration
            });

            let authorities = []

            for (let i = 0; i < user.roles.length; i++) {
                authorities.push("ROLE_" + user.roles[i].name.toUpperCase())
            }

            res.status(200).json({
                id: user._id,
                username: user.username,
                email: user.email,
                roles: authorities,
                accessToken: token,
                success: true,
            });
        });

}

exports.facebook=(req, res) => {
    // Successful authentication, redirect home.
    const user = req.user
    User.findOne({
        facebookId: user.facebookId
    })
        // Ket voi du lieu ben collection roles
        .populate("roles")
        .exec(async (err, user) => {
            if (err) {
                res.status(500).json({ message: err, success: false });
                return
            }

            // Tao ma token
            var token = jwt.sign({ id: user._id }, config.secret, {
                // expiresIn: 86400
                expiresIn: config.jwtExpiration
            });

            let authorities = []

            for (let i = 0; i < user.roles.length; i++) {
                authorities.push("ROLE_" + user.roles[i].name.toUpperCase())
            }

            res.status(200).json({
                id: user._id,
                username: user.username,
                email: user.email,
                roles: authorities,
                accessToken: token,
                success: true,
            });
        });
    }