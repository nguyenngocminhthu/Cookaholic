import Cookies from "js-cookie";
import authAPI from "../../../apis/Auth.Api";
import { changeLoading } from "../System/systemActions";
import {
    GET_AUTH_FAIL,
    GET_AUTH_SUCCESS,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT,
    REGISTER_FAIL,
    REGISTER_SUCCESS,
} from "./types";

// const loading =
//     (loading = false) =>
//         (dispatch) => {
//             dispatch(changeLoading(loading));
//         };

export function loginSuccess(data) {
    return {
        type: LOGIN_SUCCESS,
        payload: data,
    };
}

export function loginFail() {
    return {
        type: LOGIN_FAIL,
        payload: {},
    };
}

export function loginAction(dataSubmit) {
    return async (dispatch) => {
        try {
            // dispatch(loading(true)); 
            const res = await authAPI.login(dataSubmit);
            console.log("log at ==> authAction ==> res: ", res)
            if (res.success) {
                // dispatch(loading());
                dispatch(loginSuccess(res.data));
                return res.data;
            }
            // dispatch(loading());
            dispatch(loginFail());
            return false;
        } catch {
            // dispatch(loading());
            dispatch(loginFail());
            return false;
        }
    };
}

export function googleloginAction(dataSubmit) {
    return async (dispatch) => {
        try {
            // dispatch(loading(true)); 
            const res = await authAPI.googlelogin(dataSubmit);
            console.log("log at ==> authAction ==> res: ", res)
            if (res.success) {
                // dispatch(loading());
                dispatch(loginSuccess(res.data));
                return res.data;
            }
            // dispatch(loading());
            dispatch(loginFail());
            return false;
        } catch {
            // dispatch(loading());
            dispatch(loginFail());
            return false;
        }
    };
}

export const getAuthSuccess = (data) => {
    return {
        type: GET_AUTH_SUCCESS,
        payload: data,
    };
};

export const getAuthFail = () => {
    return {
        type: GET_AUTH_FAIL,
        payload: {},
    };
};

export const getAuthAction = () => async (dispatch) => {
    try {
        // dispatch(loading());
        const res = await authAPI.getAuth();
        console.log(res)
        if (res.success) {
            // dispatch(loading());
            dispatch(getAuthSuccess(res.data));
            return { ...res.data, isAuth: true };
        }
        // dispatch(loading());
        dispatch(getAuthFail());
        return { isAuth: false };
    } catch {
        // dispatch(loading());
        dispatch(getAuthFail());
        return { isAuth: false };
    }
};

export function logoutAction() {
    Cookies.remove("accessToken");
    return {
        type: LOGOUT,
        payload: {},
    };
}

export const registerSuccess = (data) => {
    return {
        type: REGISTER_SUCCESS,
        payload: data,
    };
};

export const registerFail = () => {
    return {
        type: REGISTER_FAIL,
        payload: {},
    };
};

export const registerAction = (body) => async (dispatch) => {
    try {
        // dispatch(loading(true));
        const res = await authAPI.register(body);
        console.log("log at ==> authAction.js ==> line 114 ==>  res: ", res)

        if (!res.success) {
            // dispatch(loading());
            dispatch(registerFail());
        } else {
            // dispatch(loading());
            dispatch(registerSuccess(res.data));
        }
        return res.success;
    } catch (err) {
        console.log(err);
        // dispatch(loading());
        dispatch(registerFail());
        return false;
    }
};

export const verifyAction = (body) => async (dispatch) => {
    try {
        // dispatch(loading(true));
        const res = await authAPI.verify(body);
        if (!res.success) {
            //   dispatch(loading());
            dispatch(registerFail());
        } else {
            //   dispatch(loading());
            dispatch(registerSuccess(res.data));
        }
        return res.success;
    } catch (err) {
        console.log(err);
        // dispatch(loading());
        dispatch(registerFail());
        return false;
    }
};