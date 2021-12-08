const { comment } = require('../models')
const db = require('../models')
const { findOne } = require('../models/comment.model')
const Comment = db.comment
const Recipe = db.recipe

// Create cmt
exports.create = async (req, res) => {

    const data = req.body
    const date = new Date()
    date.setHours(date.getHours() + 7)
    console.log(date)
    const comment = await Comment.create({
        user: data.user,
        recipe: data.recipe,
        rate: data.rate,
        content: data.content,
        createAt: date
    })

    console.log(comment)

    Recipe.findById(data.recipe)
        .then(result => {
            let rateOfRecipe = result.rate
            console.log(data.rate)
            
            let x = (rateOfRecipe / 2) + (data.rate / 2)

            console.log(rateOfRecipe / 2)
            console.log(data.rate / 2)
            console.log(x)
            comment.save((err, data) => {
                if (err) {
                    res.status(500).json({ message: err, success: false })
                    return
                }

                Recipe.findOneAndUpdate({ _id: data.recipe }, { $set: { rate: x } }, { new: true }, (err, doc) => {
                    if (err) {
                        res.status(500).json({ message: err, success: false })
                        return
                    }
                    console.log(doc)
                    res.status(200).json({ message: "Comment success!", success: true })
                })

            })
        })
        .catch(err => {
            res.status(500).json({ message: "Error ", success: false });
            console.log("err: ", err)
        })
}

exports.reply = (req, res) => {
    const date = new Date()
    date.setHours(date.getHours() + 7)
    Comment.updateOne({ _id: req.body.id }, { $push: { replies: { user: req.body.user, content: req.body.content, createAt: date } } }, (err) => {
        if (err) {
            res.status(404).json({ message: err, success: false })
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

            // console.log(data[0].replies[0].user)


            let count = 0
            for (let i = 0; i < data.length; i++) {
                count += data[i].replies.length + 1;
            }

            console.log(count)

            res.status(200).json({ data, count: count, success: true });
        })
}

exports.delete = (req, res) => {
    const comment = req.query.comment
    const user = req.query.user
    console.log(comment)

    Comment.findOne({ _id: comment })
        .populate("recipe")
        .then(async (data) => {
            console.log(data)
            if (!data) {
                res.status(400).json({ message: "Not found this comment!", success: false })
                return
            }
            console.log(data)

            if (data.user == user || data.recipe.user == user) {
                data.delete()
                res.status(200).json({ message: "Delete success!", success: true })
                return
            }

            res.status(400).json({ message: "No permission to delete!", success: false })

        })
        .catch(err => {
            return res.status(err.status).json({ message: err, success: false })
        })

}

exports.deleteReply = (req, res) => {
    const comment = req.query.comment
    const reply = req.query.reply
    const user = req.query.user

    console.log(comment)

    Comment.findOne({ _id: comment })
        .populate("recipe")
        .then(async (data) => {
            console.log(data)
            if (!data) {
                res.status(400).json({ message: "Not found this comment!", success: false })
                return
            }
            console.log(data)

            const replies = data.replies
            for (let i = 0; i < replies.length; i++) {
                if (replies[i].user == user || data.recipe.user == user) {
                    if (replies[i]._id == reply) {
                        data.replies.splice(i, 1)
                        data.save()
                        res.status(200).json({ message: "Delete success!", success: true })
                        return
                    }
                }
            }

            res.status(400).json({ message: "You can't delete this comment!", success: false })


            console.log(replies)

            // if (data.user == user || data.recipe.user == user) {
            //     Comment.updateOne({ _id: comment }, { $pull: { replies: { _id: reply } } }, (err) => {
            //         if (err) {
            //             res.status(40).json({ message: err, success: false })
            //             return
            //         }
            //         res.status(200).json({ message: "Delete success!", success: true })
            //         return
            //     })
            // }

            // res.status(400).json({ message: "No permission to delete!", success: false })

        })
        .catch(err => {
            return res.status(err.status).json({ message: err, success: false })
        })

}