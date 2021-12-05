import toastNotify from "../Common/Toastify/toastNotify";
import axiosClient from "./axiosClient";
import queryString from "query-string";

const url = "/api/recipe";

const create = async (recipe, user, status, body) => {
    try {
        const res = await axiosClient.post(`/api/saved/${recipe}/${user}/${status}`, body);
        toastNotify(res ? res.message.VN : "Save Recipe Fail");
        return res && res.data
            ? { data: res.data || {}, success: true }
            : { success: false };
    } catch (error) {
        toastNotify("Save Recipe Success");
        return {
            success: false,
        };
    }
};