import validator from "validator";
import toastNotify from "../../Toastify/toastNotify";

const validate = (email, password) => {
    console.log("log at ==> validate.js ==> line5 ==>  data: ", email + password)

    const isEmail = validator.isEmail(email);
    console.log("log at ==> Login.js ==> line 8 ==>  is email: ", isEmail)

    if (!isEmail) {
        toastNotify("Email không hợp lệ");
        return false;
    }
    const isPassword = validator.isEmpty(password);
    if (isPassword) {
        toastNotify("Mật khẩu không được bỏ trống");
        return false;
    }
    return {
        email,
        password,
    };
};

export default validate;