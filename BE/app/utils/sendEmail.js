const nodemailer = require("nodemailer")

const sendEmail= async(email, subject, text)=>{
    try{
        const transporter=nodemailer.createTransport({
            host: process.env.HOST,
            port: 587,
            secure: false,
            auth:{
                user: process.env.USER,
                pass: process.env.PASS,
            }
        })

        await transporter.sendMail({
            from: process.env.USER,
            to: email,
            subject: subject,
            text: text,
        })

        console.log("email sent sucessfully")
    }catch(err){
        console.log(err, "email not sent")
    }
}

module.exports=sendEmail