import toastNotify from "../Common/Toastify/toastNotify";
import axiosClient from "./axiosClient";
import queryString from "query-string";

const url = "/api/recipe";

const create = async (body) => {
    try {
        const res = await axiosClient.post(`${url}`, body);
        toastNotify(res ? res.message.VN : "Add Recipe Fail");
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

const getAll = async () => {
    try {
        const res = await axiosClient.get(`${url}/0`);
        // toastNotify(res ? res.message.VN : "Lấy thương hiệu thất bại");
        console.log("log at ==> Recipe Api ==> res: ", res)
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
            res = await axiosClient.get(`/api/recipe/0`);
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

const Recipe = { getAll, filter, create };

export default Recipe;