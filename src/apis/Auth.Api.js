import Cookie from "js-cookie";
import toastNotify from "../Common/Toastify/toastNotify";
import axiosClient from "./axiosClient";

const url = "/api/auth/";

const getAuth = async () => {
    try {
        const res = await axiosClient.get(`${url}/get-auth`);
        if (res && res.data) return { data: res.data, success: true };
        return { success: false };
    } catch (error) {
        return {
            success: false,
        };
    }
};

const login = async (body) => {
    try {
        const res = await axiosClient.post(`${url}/signin`, { ...body });
        if (res && res.data) {
            Cookie.set("accessToken", res.data.accessToken);
            toastNotify(res.message.VN);
            return { data: {}, success: true };
        }
        toastNotify(res.message.VN);
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
        toastNotify(res ? res.message.VN : "Đăng ký thất bại");
        return res && res.data
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