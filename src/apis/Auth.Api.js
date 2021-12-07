import Cookie from "js-cookie";
import toastNotify from "../Common/Toastify/toastNotify";
import axiosClient from "./axiosClient";

const url = "/api/auth";

const getAuth = async () => {
    try {
        const res = await axiosClient.get(`${url}/getauth`);
        if (res.success) return { data: res.data, success: true };
        return {data:{}, success: false };
    } catch (error) {
        return {
            success: false,
        };
    }
};

const login = async (body) => {
    try {
        const res = await axiosClient.post(`${url}/signin`, body);
        console.log("log at ==> Auth.Api.js ==> line 23 ==>  res: ", res)
        if(res.message=="Account isn't verified. Please check email!"){
            const response = await axiosClient.post(`${url}/sendlink`, body)
            toastNotify("Your account isn't verified. Please check your email to verified!");
            return response
            ? { data: response || {}, success: false }
            : { success: false };
        }
        if (res.success) {
            Cookie.set("accessToken", res.accessToken);
            toastNotify(res.message);
            return { data: res, success: true };
        }
        toastNotify(res.message);
        return { data: {}, success: false };
    } catch (error) {
        toastNotify("Đăng nhập thất bại");
        return {
            success: false,
        };
    }
};

const googlelogin = async (body) => {
    try {
        const res = await axiosClient.post(`/api/auth/googlelogin`, body);
        console.log("log at ==> Auth.Api.js ==> line 23 ==>  res: ", res)
        if (res.success) {
            Cookie.set("accessToken", res.accessToken);
            toastNotify(res.message);
            return { data: res, success: true };
        }
        toastNotify(res.message);
        return { data: {}, success: false };
    } catch (error) {
        toastNotify("Đăng nhập thất bại");
        return {
            success: false,
        };
    }
};

const facebooklogin = async (body) => {
    try {
        const res = await axiosClient.post(`/api/auth/facebooklogin`, body);
        console.log("log at ==> Auth.Api.js ==> line 23 ==>  res: ", res)
        if (res.success) {
            Cookie.set("accessToken", res.accessToken);
            toastNotify(res.message);
            return { data: res, success: true };
        }
        toastNotify(res.message);
        return { data: {}, success: false };
    } catch (error) {
        toastNotify("Đăng nhập thất bại");
        return {
            success: false,
        };
    }
};

const register = async (body) => {
    try {
        const res = await axiosClient.post(`${url}/signup`, body);
        toastNotify(res ? res.message : "Đăng ký thất bại");

        if(res.success){
            const response = await axiosClient.post(`${url}/sendlink`, body)
            console.log(response)
            return response
            ? { data: response || {}, success: true }
            : { success: false };
        }
        return res
            ? { data: res || {}, success: true }
            : { success: false };
    } catch (error) {
        toastNotify("Đăng ký thất bại");
        return {
            success: false,
        };
    }
};

const verify = async (body) => {
    try {
        
        const res = await axiosClient.post(`${url}/confirm/${body.user}/${body.token}`);
        toastNotify(res ? res.message : "Đăng ký thất bại");

        return res
            ? { data: res || {}, success: true }
            : { success: false };
    } catch (error) {
        toastNotify("Đăng ký thất bại");
        return {
            success: false,
        };
    }
};

const resetPassword = async (body) => {
    try {
        const res = await axiosClient.post(`${url}/resetpassword`, body);
        toastNotify(res ? res.message : "Đăng ký thất bại");

        return res
            ? { data: res || {}, success: true }
            : { success: false };
    } catch (error) {
        toastNotify("Đăng ký thất bại");
        return {
            success: false,
        };
    }
};

const Auth = { getAuth, login, register, googlelogin, facebooklogin, resetPassword, verify };

export default Auth;