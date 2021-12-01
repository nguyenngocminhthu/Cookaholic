import {

    GET_ALL_USER_FAIL,
    GET_ALL_USER_SUCCESS,

} from "./type";
import UserAPI from "../../../apis/User.Api";

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
            const res = await UserAPI.getAll();
            if (res.success) {

                dispatch(getAllUserSuccess(res.data));
                console.log("log at => useraction => res", res)
                return true;
            }
            dispatch(getAllUserFail());
            return false;
        } catch {
            dispatch(getAllUserFail());
            return false;
        }
    };
}