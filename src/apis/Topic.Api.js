import toastNotify from "../Common/Toastify/toastNotify";
import axiosClient from "./axiosClient";

const url = "/api/topic";

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


const Topic = { getAll };

export default Topic;