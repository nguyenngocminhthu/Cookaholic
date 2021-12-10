import toastNotify from "../Common/Toastify/toastNotify";
import axiosClient from "./axiosClient";
import queryString from "query-string";

const save = async (recipe, user, queryParams) => {
    try {
        const query = queryString.stringify(queryParams);
        const res = await axiosClient.post(`/api/saved/${recipe}/${user}?${query}`);
        toastNotify(res ? res.message : "Save Recipe Fail");
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

const getAll = async (user) => {
    try {
        const res = await axiosClient.get(`/api/saved/${user}`);
        toastNotify(res ? res.message : "Get Recipe Fail");
        return res && res.data
            ? { data: res.data || {}, success: true }
            : { success: false };
    } catch (error) {
        toastNotify("Get Recipe Success");
        return {
            success: false,
        };
    }
};

const getStatus = async (recipe, user) => {
    try {
        const res = await axiosClient.get(`/api/saved/${recipe}/${user}`);
        console.log("log at => RecipeSave.Api => getStatus => res: ", res);
        // toastNotify(res ? res.message.VN : "Tìm kiếm điện thoại thất bại");
        return res


    } catch (error) {
        // toastNotify("Tìm kiếm điện thoại thất bại");
        return {
            success: false,
        };
    }
};

const deletePost = async (id) => {
    try {
        const res = await axiosClient.delete(`/api/saved/${id}`);
        toastNotify(res ? res.message : "Delete Post fail");
        return res && res.data
            ? { data: res.data || {}, success: true }
            : { success: false };
    } catch (error) {
        toastNotify("Delete Post fail");
        return {
            success: false,
        };
    }
};


const RecipeSave = { save, getStatus, getAll, deletePost };

export default RecipeSave;