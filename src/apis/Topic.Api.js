import toastNotify from "../Common/Toastify/toastNotify";
import axiosClient from "./axiosClient";

const url = "/api/topic";

const create = async (body) => {
    try {
        const res = await axiosClient.post(`${url}`, body);
        toastNotify(res ? res.message : "Add Topic Fail");
        return res && res.data
            ? { data: res.data || {}, success: true }
            : { success: false };
    } catch (error) {
        toastNotify("Add Topic Success");
        return {
            success: false,
        };
    }
};

const getAll = async () => {
    try {
        const res = await axiosClient.get(`${url}`);
        // toastNotify(res ? res.message.VN : "Lấy thương hiệu thất bại");
        console.log("log at ==> Topic Api ==> res: ", res)
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


const Topic = { getAll, create };

export default Topic;