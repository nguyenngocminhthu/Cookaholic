import toastNotify from "../Common/Toastify/toastNotify";
import axiosClient from "./axiosClient";
import queryString from "query-string";

const url = "/api/comment";

const create = async (body) => {
    try {
        const res = await axiosClient.post(`${url}`, body);
        console.log("log at ==> comment Api ==> res", res)
        toastNotify(res ? res.message : "Add Comment Fail");
        return res.success
            ? { data: res.data || {}, success: true }
            : { success: false };
    } catch (error) {
        toastNotify("Add Comment Success");
        return {
            success: false,
        };
    }
};

const reply = async (body) => {
    try {
        const res = await axiosClient.post(`${url}/reply`, body);
        toastNotify(res ? res.message : "Reply Comment Fail");
        return res.success
            ? { data: res.data || {}, success: true }
            : { success: false };
    } catch (error) {
        toastNotify("Reply Comment Success");
        return {
            success: false,
        };
    }
};

const getByRecipe = async (recipe) => {
    try {

        const res = await axiosClient.get(`${url}/${recipe}`);
        // toastNotify(res ? res.message.VN : "Lấy thương hiệu thất bại");

        return res && res.data
            ? { data: res.data || {}, success: true }
            : { success: false };
    } catch (error) {
        // toastNotify("Lấy thương hiệu thất bại");
        return {
            success: false,
        };
    }
};

const Comment = { getByRecipe, create, reply };

export default Comment;