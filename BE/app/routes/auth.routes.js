const { verifySignUp } = require("../middlewares")
const { authJwt } = require("../middlewares")

const controller = require("../controllers/auth.controller")
const oauth = require("../controllers/oauth.controller")
const passport = require("passport")

module.exports = function (app) {
    // const { signupValidator } = require("./../validations/authValidator")
    // const { signinValidator } = require("./../validations/authValidator")

    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        )
        next()
    })

    app.post(
        "/api/auth/signup",
        [
            // signupValidator,
            verifySignUp.checkDuplicateUsernameOrEmail,
            verifySignUp.checkRolesExisted
        ],
        controller.signup
    )

    app.post("/api/auth/signin",
        // [
        //     signinValidator
        // ],
        controller.signin)

    app.get("/api/auth/getauth", [authJwt.verifyToken], controller.handleGetAuth)

    app.post("/api/auth/refreshtoken", controller.refreshToken);

    app.post("/api/auth/sendLink", controller.sendLink)

    app.post("/api/auth/:userId/:token", controller.resetPassword)

    app.post("/api/auth/googlelogin", controller.googlelogin)

    app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

    app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/' }), oauth.google)


    app.get('/auth/facebook',
        passport.authenticate('facebook', { scope: ['email'] }));

    app.get('/auth/facebook/callback',
        passport.authenticate('facebook', { failureRedirect: '/login' }),
        oauth.facebook)
}