import toastNotify from "../Common/Toastify/toastNotify";
import axiosClient from "./axiosClient";
import queryString from "query-string";

const url = "/api/user";
const insert = async (body) => {
  try {
    console.log("log at ==> User.Api.js ==> body: ", body);
    const res = await axiosClient.post(`${url}/user/create`, body);
    toastNotify(res ? res.message.VN : "Thêm user thất bại");
    return res && res.data
      ? { data: res.data || {}, success: true }
      : { success: false };
  } catch (error) {
    toastNotify("Thêm user thất bại");
    return {
      success: false,
    };
  }
};

const getAll = async () => {
  try {
    const res = await axiosClient.get(`${url}`);
    // toastNotify(res ? res.message.VN : "Lấy user thất bại");
    return res && res.data
      ? { data: res.data || {}, success: true }
      : { success: false };
  } catch (error) {
    // toastNotify("Lấy user thất bại");
    return {
      success: false,
    };
  }
};

const update = async (body) => {
  try {
    const res = await axiosClient.post(`${url}/user/update`, body);
    toastNotify(res ? res.message.VN : "Cập nhật user thất bại");
    return res && res.data
      ? { data: res.data || {}, success: true }
      : { success: false };
  } catch (error) {
    toastNotify("Cập nhật user thất bại");
    return {
      success: false,
    };
  }
};

const updateProfile = async (body) => {
  try {
    const res = await axiosClient.post(`/user/update`, body);
    toastNotify(res ? res.message.VN : "Cập nhật user thất bại");
    return res && res.data
      ? { data: res.data || {}, success: true }
      : { success: false };
  } catch (error) {
    toastNotify("Cập nhật user thất bại");
    return {
      success: false,
    };
  }
};

const filter = async (queryParams) => {
  try {
    const query = queryString.stringify(queryParams);
    console.log("log at ==> User.Api.js ==> line55 ==> query: ", query);
    const res = await axiosClient.get(`${url}/user/filter?${query}`);
    // toastNotify(res ? res.message.VN : "Tìm kiếm user thất bại");
    return res && res.data
      ? { data: res.data || {}, success: true }
      : { success: false };
  } catch (error) {
    // toastNotify("Tìm kiếm user thất bại");
    return {
      success: false,
    };
  }
};

const User = { insert, filter, getAll, update, updateProfile };

export default User;