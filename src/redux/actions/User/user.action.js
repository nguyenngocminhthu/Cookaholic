import {

    GET_ALL_USER_FAIL,
    GET_ALL_USER_SUCCESS,

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