const { verifySignUp } = require("../middlewares")
const { authJwt } = require("../middlewares")

const controller = require("../controllers/auth.controller")

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

    app.post("/api/auth/confirm/:userId/:confirmationCode", controller.verifyAccount)

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

    app.post("/api/auth/facebooklogin", controller.facebooklogin)

}