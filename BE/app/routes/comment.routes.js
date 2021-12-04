const controller = require('../controllers/comment.controller')
const { cloudinary } = require("../middlewares")

module.exports = (app) => {
    app.post("/api/comment", controller.create)
    app.get("/api/comment/:recipe", controller.getByRecipe)
    app.post("/api/comment/reply", controller.reply)
}