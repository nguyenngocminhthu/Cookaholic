import validator from "validator";
import toastNotify from "../../Toastify/toastNotify";

const Validate = (username, password) => {
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

export default Validate;