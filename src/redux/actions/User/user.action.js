import {

    GET_ALL_USER_FAIL,
    GET_ALL_USER_SUCCESS,
    FIND_USER_BY_ID_FAIL,
    FIND_USER_BY_ID_SUCCESS,
    UPDATE_USER_FAIL,
    UPDATE_USER_SUCCESS,
    CHANGE_PASS_FAIL,
    CHANGE_PASS_SUCCESS,
    ADD_ADMIN_FAIL,
    ADD_ADMIN_SUCCESS,

} from "./type";
import UserAPI from "../../../apis/User.Api";
import { changeLoading } from "../System/systemActions";

const loading =
    (loading = false) =>
        (dispatch) => {
            dispatch(changeLoading(loading));
        };

function getAllUserFail() {
    return {
        type: GET_ALL_USER_FAIL,
        payload: {},
    };
}

function getAllUserSuccess(data) {
    return {
        type: GET_ALL_USER_SUCCESS,
        payload: data,
    };
}

export function getAllUserAction() {
    return async (dispatch) => {
        try {
            dispatch(loading(true));
            const res = await UserAPI.getAll();
            if (res.success) {
                dispatch(loading());
                dispatch(getAllUserSuccess(res.data));
                console.log("log at => useraction => res", res)
                return true;
            }
            dispatch(loading());
            dispatch(getAllUserFail());
            return false;
        } catch {
            dispatch(loading());
            dispatch(getAllUserFail());
            return false;
        }
    };
}

export function findUserByIdFail() {
    return {
        type: FIND_USER_BY_ID_FAIL,
        payload: {},
    };
}

export function findUserByIdSuccess(data) {
    return {
        type: FIND_USER_BY_ID_SUCCESS,
        payload: data,
    };
}

export function findUserByIdAction(id) {
    return async (dispatch) => {
        try {
            dispatch(loading(true));
            const res = await UserAPI.findById(id);
            if (res.success) {
                dispatch(loading());
                dispatch(findUserByIdSuccess(res.data));
                return true;
            }
            dispatch(loading());
            dispatch(findUserByIdFail());
            return false;
        } catch {
            dispatch(loading());
            dispatch(findUserByIdFail());
            return false;
        }
    };
}

export function updateUserFail() {
    return {
        type: UPDATE_USER_FAIL,
        payload: {},
    };
}

export function updateUserSuccess(data) {
    return {
        type: UPDATE_USER_SUCCESS,
        payload: data,
    };
}

export function updateUserAction(id, dataSubmit) {
    return async (dispatch) => {
        try {
            dispatch(loading(true));
            const res = await UserAPI.update(id, dataSubmit);
            if (res.success) {
                dispatch(loading());
                dispatch(updateUserSuccess(res.data));
                return true;
            }
            dispatch(loading());
            dispatch(updateUserFail());
            return false;
        } catch {
            dispatch(loading());
            dispatch(updateUserFail());
            return false;
        }
    };
}

export function changePassFail() {
    return {
        type: CHANGE_PASS_FAIL,
        payload: {},
    };
}

export function changePassSuccess(data) {
    return {
        type: CHANGE_PASS_SUCCESS,
        payload: data,
    };
}

export function changePassAction(id, dataSubmit) {
    return async (dispatch) => {
        try {
            dispatch(loading(true));
            const res = await UserAPI.changePass(id, dataSubmit);
            if (res.success) {
                dispatch(loading());
                dispatch(changePassSuccess(res.data));
                return true;
            }
            dispatch(loading());
            dispatch(changePassFail());
            return false;
        } catch {
            dispatch(loading());
            dispatch(changePassFail());
            return false;
        }
    };
}

function addAdminFail() {
    return {
        type: ADD_ADMIN_FAIL,
        payload: {},
    };
}

function addAdminSuccess(data) {
    return {
        type: ADD_ADMIN_SUCCESS,
        payload: data,
    };
}

export function addAdminAction(dataSubmit) {
    return async (dispatch) => {
        try {
            dispatch(loading(true));
            const res = await UserAPI.insert(dataSubmit);
            if (res.success) {
                dispatch(loading());
                dispatch(addAdminSuccess(res.data));
                return true;
            }
            dispatch(loading());
            dispatch(addAdminFail());
            return false;
        } catch {
            dispatch(loading());
            dispatch(addAdminFail());
            return false;
        }
    };
}