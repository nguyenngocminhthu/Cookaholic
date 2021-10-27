const config = require("../config/auth.config")
const db = require("../models")
// const User = db.user
// const Role = db.role
const { user: User, role: Role, refreshToken: RefreshToken } = db;

// var jwt = require("jsonwebtoken")
// var bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")

// Kiem tra, them roles va luu user vao db
exports.signup = (req, res) => {

    // Tao user tu request gui len
    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8),
    })

    user.save((err, user) => {
        if (err) {
            res.status(500).send({ message: err })
            return
        }

        // Kiem tra co roles trong request khong
        if (req.body.roles) {
            // Tim tat ca role trong request co trong collection roles
            Role.find(
                {
                    name: { $in: req.body.roles }
                },
                (err, roles) => {
                    if (err) {
                        res.status(500).send({ message: err })
                        return
                    }

                    user.roles = roles.map(role => role._id)
                    user.save(err => {
                        if (err) {
                            res.status(500).send({ message: err })
                            return
                        }

                        res.send({ message: "User was registered successfully!" })
                    })

                }
            )
        } else {

            // Tim 1 document trong collection roles co name : "user"
            Role.findOne({ name: "user" }, (err, role) => {
                if (err) {
                    res.status(500).send({ message: err })
                    return
                }

                user.roles = [role._id]
                user.save(err => {
                    if (err) {
                        res.status(500).send({ message: err })
                        return
                    }

                    res.send({ message: "User was registered successfully!" })
                })
            })
        }
    })
}

// Kiem tra dang nhap neu thanh cong tra ve user va accestoken
exports.signin = (req, res) => {
    // Tim user co username giong username vua nhap 
    User.findOne({
        // username: req.body.username
        email:req.body.email
    })
        // Ket voi du lieu ben collection roles
        .populate("roles", "-__v")
        .exec(async (err, user) => {
            if (err) {
                res.status(500).send({ message: err })
                return
            }

            // Kiem tra co user trung khong
            if (!user) {
                // return res.status(404).send({ message: "User not found." })
                return res.status(404).send({message:"Email not found."})
            }

            // So password nhap va password db
            var passwordIsValid = bcrypt.compareSync(
                req.body.password,
                user.password
            )

            // Kiem tra password co hop le khong
            if (!passwordIsValid) {
                return res.status(401).send({
                    accessToken: null,
                    message: "Invalid Password"
                })
            }

            // Tao ma token
            var token = jwt.sign({ id: user.id }, config.secret, {
                // expiresIn: 86400
                expiresIn: config.jwtExpiration
            });

            let refreshToken = await RefreshToken.createToken(user);

            // var authorities = []
            let authorities = []

            for (let i = 0; i < user.roles.length; i++) {
                authorities.push("ROLE_" + user.roles[i].name.toUpperCase())
            }

            res.status(200).send({
                id: user._id,
                username: user.username,
                email: user.email,
                roles: authorities,
                accessToken: token,
                refreshToken: refreshToken
            });
        });
};

exports.refreshToken= async (req, res)=>{
    const {refreshToken: requestToken}=req.body;

    if(requestToken==null){
        return res.status(403).json({message: "Refresh Token is required!"});
    }

    try {
        let refreshToken = await RefreshToken.findOne({token: requestToken});

        if(!refreshToken){
            res.status(403).json({message: "Refresh token is not in database!"});
            return;
        }

        if(RefreshToken.verifyExpiration(refreshToken)){
            RefreshToken.findByIdAndRemove(refreshToken._id, {useFindAndModify: false}).exec();

            res.status(404).json({
                message:"Refresh token was expired. Please make a new signin request"
            });
            return;
        }

        let newAccessToken=jwt.sign({id:refreshToken.user._id}, config.secret, {
            expiresIn: config.jwtExpiration
        });

        return res.status(200).json({
            accessToken: newAccessToken,
            refreshToken: refreshToken.token
        });
    }catch(err){
        return res.status(500).send({message:err})
    }
}