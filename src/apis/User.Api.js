import toastNotify from "../Common/Toastify/toastNotify";
import axiosClient from "./axiosClient";
import queryString from "query-string";

const url = "/api/user";
const insert = async (body) => {
  try {
    const res = await axiosClient.post(`/api/admin`, body);
    toastNotify(res ? res.message : "Add Admin fail");
    return res && res.data
      ? { data: res.data || {}, success: true }
      : { success: false };
  } catch (error) {
    toastNotify("Add Admin fail");
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

const findById = async (id) => {
  try {
    const res = await axiosClient.get(`${url}/${id}`);

    return res && res.data
      ? { data: res.data || {}, success: true }
      : { success: false };
  } catch (error) {

    return {
      success: false,
    };
  }
};

const update = async (id, body) => {
  try {
    const res = await axiosClient.put(`${url}/${id}`, body);
    toastNotify(res ? res.message : "Update Profile fail");

    return res && res.data
      ? { data: res.data || {}, success: true }
      : { success: false };
  } catch (error) {
    toastNotify("Update Profile fail");
    return {
      success: false,
    };
  }
};

const changePass = async (id, body) => {
  try {
    const res = await axiosClient.put(`${url}/changePassword/${id}`, body);
    toastNotify(res ? res.message : "Change Password fail");

    return res && res.data
      ? { data: res.data || {}, success: true }
      : { success: false };
  } catch (error) {
    toastNotify("Change Password fail");
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

const deleteUser = async (id) => {
  try {
    const res = await axiosClient.get(`${url}/${id}`);
    toastNotify(res ? res.message : "Delete User fail");

    return res && res.data
      ? { data: res.data || {}, success: true }
      : { success: false };
  } catch (error) {
    toastNotify("Delete User fail");
    return {
      success: false,
    };
  }
};

const User = { insert, filter, getAll, update, findById, changePass, deleteUser };

export default User;