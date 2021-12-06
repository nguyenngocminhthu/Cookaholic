const sendMail = require("../utils/sendEmail");


const sendVerifyAccount = async (email, text) => {
    try {
      const body =`Chào mừng bạn đến với Cookaholic, đây là link xác thực tài khoản của bạn: ${text}` ;
      await sendMail(email, "Mã xác thực tài khoản", body);

      return {
        message: "Verify code has been sent",
        data: "",
        success: true,
      };
    } catch (error) {
      return {
        message: error.message,
        success: false,
      };
    }
  }; //done

sendResetPassword = async (email, text) => {
    try {
        const body = `Đây là link xác nhận tạo mật khẩu mới:${text}`;
        await sendMail(email, "Quên mật khẩu", body);

        console.log("Email sent")
    } catch (error) {
        console.log(err, "Not sent")
    }
}; //done


const sendEmail = {
    sendVerifyAccount,
    sendResetPassword
}

module.exports = sendEmail
