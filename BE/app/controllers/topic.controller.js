const db = require('../models')
const Topic = db.topic

exports.create = async (req, res) => {
    let path = null
    if (req.file)
        path = req.file.path

    const topic = new Topic({
        name: req.body.name,
        image: path,
    })

    try {
        await topic.save()
    } catch (error) {
        return res.status(400).json({
            message: `failed, check to see the ${error}`,
            status: "error"
        })
    }
}

exports.findAll = async (req, res) => {

    Topic.find()
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found Tutorial with id " + id })
            else
                res.send(data)
        })
        .catch(err => {
            res.status(500).send({ message: "Error retrieving Tutorial with id=" + id });
        })
}
