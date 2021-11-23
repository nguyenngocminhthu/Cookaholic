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
                rateOfRecipe=1
            let rate=data.rate
            let x = (rateOfRecipe + rate) / 2

            console.log(rateOfRecipe + data.rate)
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