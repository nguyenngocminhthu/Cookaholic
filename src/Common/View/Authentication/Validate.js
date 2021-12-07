import validator from "validator";
import toastNotify from "../../Toastify/toastNotify";

const validateLogin = (username, password) => {
    const isEmail = validator.isEmail(username);
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
        username,
        password,
    };
};


const validateRegister = (data) => {
    const isEmail = validator.isEmail(data.email);
    if (!isEmail) {
        toastNotify("Email không hợp lệ");
        return false;
    }
    const isPassword = validator.isEmpty(data.password);
    if (isPassword) {
        toastNotify("Mật khẩu không được bỏ trống");
        return false;
    }
    const isFirstName = validator.isEmpty(data.firstName);
    if (isFirstName) {
        toastNotify("concac")
        return false;
    }
    const isLastName = validator.isEmpty(data.lastName);
    if (isLastName) {
        toastNotify("concac")
        return false;
    }
    return data
};

const validateSendLink = (email) => {
    const isEmail = validator.isEmail(email);
    if (!isEmail) {
        toastNotify("Email không hợp lệ");
        return false;
    }
   
    return {
        email,
    };
};

export { validateLogin, validateRegister, validateSendLink }