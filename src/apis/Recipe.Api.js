import toastNotify from "../Common/Toastify/toastNotify";
import axiosClient from "./axiosClient";
import queryString from "query-string";

const url = "/api/recipe";

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
        console.log("log at ==> Brand.Api.js ==> line55 ==> query: ", query);
        const res = await axiosClient.get(`${url}/filter?${query}`);
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

const Recipe = { getAll, filter };

export default Recipe;