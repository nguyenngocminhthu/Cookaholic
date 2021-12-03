import {

    GET_ALL_USER_FAIL,
    GET_ALL_USER_SUCCESS,
    FIND_USER_BY_ID_FAIL,
    FIND_USER_BY_ID_SUCCESS,

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