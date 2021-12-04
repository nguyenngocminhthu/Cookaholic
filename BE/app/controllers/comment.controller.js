const { comment } = require('../models')
const db = require('../models')
const Comment = db.comment
const Recipe = db.recipe

// Create cmt
exports.create = async (req, res) => {
    let path = null
    if (req.file)
        path = req.file.path

    const data = req.body

    const comment = new Comment({
        user: data.user,
        recipe: data.recipe,
        rate: data.rate,
        content: data.content,
        image: path,
    })

    Recipe.findById(data.recipe)
        .then(result => {
            let rateOfRecipe = result.rate
            if (rateOfRecipe == 0)
                rateOfRecipe = 1
            let x = (rateOfRecipe / 2) + (data.rate / 2)

            console.log(rateOfRecipe / 2)
            console.log(data.rate / 2)
            console.log(x)
            comment.save((err, data) => {
                if (err) {
                    res.status(500).json({ message: err, success: false })
                    return
                }

                Recipe.updateOne({ _id: data.recipe }, { $set: { rate: x } }, (err) => {
                    if (err) {
                        res.status(500).json({ message: err, success: false })
                        return
                    }

                    res.status(200).json({ message: "Comment success!", success: true })
                })
            })
        })
        .catch(err => {
            res.status(500).json({ message: "Error ", success: false });
        })

}

exports.reply = (req, res) => {
    Comment.updateOne({ _id: req.body.id }, { $push: { replies: { user: req.body.user, content: req.body.content } } }, (err) => {
        if (err) {
            res.status(500).json({ message: err, success: false })
            return
        }

        res.status(200).json({ message: "Reply success!", success: true })
    })
}

exports.getByRecipe = async (req, res) => {
    const recipe = req.params.recipe
    Comment.find({ recipe: recipe })
        .populate("user")
        .populate("replies.user")
        .exec(async (err, data) => {
            if (err) {
                res.status(500).json({ message: err, success: false });
                return
            }

            if (!data) {
                // return res.status(404).send({ message: "User not found." })
                return res.status(404).json({ message: "Not found comment.", success: false });
            }

            console.log(data[0].replies[0].user)

            res.status(200).json({ data, success: true });
        })
}