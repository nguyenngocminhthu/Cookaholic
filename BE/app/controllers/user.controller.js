// exports.allAccess = (req, res) => {
//     res.status(200).json("Public Content.")
// }

// exports.userBoard = (req, res) => {
//     res.status(200).json("User Content.")
// }

// exports.adminBoard = (req, res) => {
//     res.status(200).json("Admin Content.");
// };

const db = require('../models')
const User = db.user
const format = require('date-fns/format')
const bcrypt = require("bcrypt");

exports.getUser = (req, res) => {
    const id = req.params.id

    User.findById(id, (err, user) => {
        if (err) {
            console.log(err)
            res.status(500).json({ message: err, success: false })
            return
        }

        if (!user) {
            res.status(400).json({ message: "User does not exist", success: false })
            return
        }

        const dob = format(user.dob, 'dd/MM/yyyy');
        console.log(dob)
        res.status(200).json({ user, dob: dob, success: true })
    })
}

exports.update = (req, res) => {
    const id = req.params.id

    User.updateOne({ _id: id }, { $set: data }, (err) => {
        if (err) {
            console.log(err)
            res.status(500).json({ message: err, success: false })
            return
        }

        res.status(200).json({ message: "Update success!", success: true })
    })
}

exports.changePassword = (req, res) => {
    const id = req.params.id
    const oldPass = req.body.oldPass
    const newPass = req.body.newPass

    User.findById(id)
        .then((async (user) => {
            const passwordIsValid = await bcrypt.compare(
                oldPass,
                user.password
            )

            if (!passwordIsValid) {
                res.status(401).json({ message: "Current password not true!", success: false })
                return
            }

            user.updateOne({ $set: { password: bcrypt.hashSync(newPass, 8) } }, (err) => {
                if (err) {
                    res.status(500).json({ message: err, success: false })
                    console.log(err)
                    return
                }

                res.status(200).json({ message: "Update success!", success: true })
            })
        }))
        .catch(err => {
            res.status(500).json({ message: err, success: false })
            console.log(err)
        })

}