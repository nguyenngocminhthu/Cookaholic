import toastNotify from "../Common/Toastify/toastNotify";
import axiosClient from "./axiosClient";
import queryString from "query-string";

const url = "/api/recipe";

const create = async (body) => {
    try {
        const res = await axiosClient.post(`${url}`, body);
        toastNotify(res ? res.message : "Add Recipe Fail");
        return res && res.data
            ? { data: res.data || {}, success: true }
            : { success: false };
    } catch (error) {
        toastNotify("Add Recipe Success");
        return {
            success: false,
        };
    }
};

const getAll = async (queryParams) => {
    try {
        const query = queryString.stringify(queryParams);
        const res = await axiosClient.get(`${url}?${query}`);
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

const acceptPost = async (id) => {
    try {
        const res = await axiosClient.put(`/api/recipe/status/${id}`);
        toastNotify(res ? res.message : "Cập nhật bài viết thất bại");
        console.log("log at ==> Recipe Api ==> res: ", res)
        return res && res.data
            ? { data: res.data || {}, success: true }
            : { success: false };
    } catch (error) {
        toastNotify("Cập nhật bài viết thất bại");
        return {
            success: false,
        };
    }
};

const deletePost = async (id) => {
    try {
        const res = await axiosClient.delete(`/api/recipe/${id}`);
        toastNotify(res ? res.message : "Delete Post fail");
        console.log("log at ==> Recipe Api ==> res: ", res)
        return res && res.data
            ? { data: res.data || {}, success: true }
            : { success: false };
    } catch (error) {
        toastNotify("Delete Post success");
        return {
            success: false,
        };
    }
};

const findById = async (id) => {
    try {
        const res = await axiosClient.get(`${url}/${id}`);
        // toastNotify(res ? res.message.VN : "Tìm kiếm điện thoại thất bại");
        return res && res.data
            ? { data: res.data || {}, success: true }
            : { success: false };
    } catch (error) {
        // toastNotify("Tìm kiếm điện thoại thất bại");
        return {
            success: false,
        };
    }
};

const findByUser = async (id, queryParams) => {
    try {
        const query = queryString.stringify(queryParams);
        const res = await axiosClient.get(`${url}/user/${id}?${query}`);
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

const filter = async (queryParams) => {
    try {
        const query = queryString.stringify(queryParams);
        console.log("lpg at ==> recipe api ==> query: ", query)
        let res;
        if (query) {
            res = await axiosClient.get(`/api/recipe/topic?${query}`);
        } else
            res = await axiosClient.get(`/api/recipe?status=0`);
        // toastNotify(res ? res.message.VN : "Tìm kiếm thương hiệu thất bại");
        return res && res.data
            ? { data: res.data || {}, success: true }
            : { success: false };
    } catch (error) {
        // toastNotify("Tìm kiếm thương hiệu thất bại");
        return {
            success: false,
        };
    }
};

const update = async (id, body) => {
    try {
        const res = await axiosClient.put(`${url}/${id}`, body);
        toastNotify(res ? res.message : "Update Recipe fail");

        return res && res.data
            ? { data: res.data || {}, success: true }
            : { success: false };
    } catch (error) {
        toastNotify("Update Recipe fail");
        return {
            success: false,
        };
    }
};

const Recipe = { getAll, filter, create, acceptPost, deletePost, findById, findByUser, update };

export default Recipe;