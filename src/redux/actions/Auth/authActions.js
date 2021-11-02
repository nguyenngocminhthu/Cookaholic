import Cookies from "js-cookie";
import authAPI from "../../../apis/Auth.Api";
import { changeLoading } from "../System/systemActions";
import {
    GET_USER_FAIL,
    GET_USER_SUCCESS,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT,
    REGISTER_FAIL,
    REGISTER_SUCCESS,
} from "./types";

const loading =
    (loading = false) =>
        (dispatch) => {
            dispatch(changeLoading(loading));
        };

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
            dispatch(loading(true));
            const res = await authAPI.login(dataSubmit);
            if (res.success) {
                dispatch(loading());
                dispatch(loginSuccess(res.data));
                return true;
            }
            dispatch(loading());
            dispatch(loginFail());
            return false;
        } catch {
            dispatch(loading());
            dispatch(loginFail());
            return false;
        }
    };
}

export const getUserSuccess = (data) => {
    return {
        type: GET_USER_SUCCESS,
        payload: data,
    };
};

export const getUserFail = () => {
    return {
        type: GET_USER_FAIL,
        payload: {},
    };
};

export const getAuthAction = () => async (dispatch) => {
    try {
        dispatch(loading());
        const res = await authAPI.getAuth();
        if (res.success) {
            dispatch(loading());
            dispatch(getUserSuccess(res.data));
            return { ...res.data, isAuth: true };
        }
        dispatch(loading());
        dispatch(getUserFail());
        return { isAuth: false };
    } catch {
        dispatch(loading());
        dispatch(getUserFail());
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
        dispatch(loading(true));
        const res = await authAPI.register(body);
        if (!res.success) {
            dispatch(loading());
            dispatch(registerFail());
        } else {
            dispatch(loading());
            dispatch(registerSuccess(res.data));
        }
        return res.success;
    } catch (err) {
        console.log(err);
        dispatch(loading());
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