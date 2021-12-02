var GoogleStrategy = require('passport-google-oauth20').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;

const db = require('../models');
const User = db.user
const Role = db.role

module.exports = function (passport) {
    passport.serializeUser(function (user, done) {
        done(null, user);
    });

    passport.deserializeUser(function (id, done) {
        User.findById(id, function (err, user) {
            done(err, user);
        });
    });

    passport.use(new GoogleStrategy({
        clientID: '741877373176-savm5ic6j7s14804jet71sqhbmc8a4il.apps.googleusercontent.com',
        clientSecret: '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',
        callbackURL: "http://localhost:8888/auth/google/callback"
    },
        function (accessToken, refreshToken, profile, done) {
            User.findOne({ googleId: profile.id },
                (err, user) => {
                    if (err)
                        return done(err);

                    if (user) {
                        return done(null, user);
                    }
                    else {
                        var newUser = new User({
                            username: profile.displayName,
                            email: profile.emails[0].value,
                            googleId: profile.id
                        })
                        newUser.save((err, user) => {
                            if (err)
                                throw err;

                            // Tim 1 document trong collection roles co name : "user"
                            Role.findOne({ name: "user" }, (err, role) => {
                                if (err)
                                    throw err;

                                user.roles = [role._id]
                                user.save()

                                return done(null, user);
                            })

                        })
                    }
                })
        }
    ))

    passport.use(new FacebookStrategy({
        clientID: '876160799940732',
        clientSecret: '6bfe896ef5d542067a81c17a903f43ea',
        callbackURL: "https://5c66-2405-4803-c78a-35a0-913e-a7c6-c6b0-e037.ngrok.io/auth/facebook/callback"
    },
        function (accessToken, refreshToken, profile, done) {

            console.log(profile)
            User.findOne({ facebookId: profile.id },
                (err, user) => {
                    if (err)
                        return done(err);

                    if (user) {
                        return done(null, user);
                    }
                    else {
                        var newUser = new User({
                            username: profile.displayName,
                            email: profile.emails[0].value,
                            facebookId: profile.id
                        })
                        newUser.save((err, user) => {
                            if (err)
                                throw err;

                            // Tim 1 document trong collection roles co name : "user"
                            Role.findOne({ name: "user" }, (err, role) => {
                                if (err)
                                    throw err;

                                user.roles = [role._id]
                                user.save()

                                return done(null, user);
                            })

                        })
                    }
                })
        }
    ))
}