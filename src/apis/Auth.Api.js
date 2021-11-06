import Cookie from "js-cookie";
import toastNotify from "../Common/Toastify/toastNotify";
import axiosClient from "./axiosClient";

const url = "/api/auth";

const getAuth = async () => {
    try {
        const res = await axiosClient.get(`${url}/get-auth`);
        if (res) return { data: res, success: true };
        return { success: false };
    } catch (error) {
        return {
            success: false,
        };
    }
};

const login = async (body) => {
    try {
        console.log("log at ==> Auth.Api.js ==> line 21 ==>  body: ", body)
        const res = await axiosClient.post(`${url}/signin`, body);
        console.log("log at ==> Auth.Api.js ==> line 23 ==>  res: ", res)

        if (res) {
            Cookie.set("accessToken", res.accessToken);
            toastNotify(res.message);
            return { data: {}, success: true };
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

const Auth = { getAuth, login, register };

export default Auth;