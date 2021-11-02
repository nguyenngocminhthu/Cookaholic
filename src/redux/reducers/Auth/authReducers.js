/* eslint-disable import/no-anonymous-default-export */
import {
    GET_AUTH,
    GET_USER_FAIL,
    GET_USER_SUCCESS,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT,
    REGISTER_FAIL,
    REGISTER_SUCCESS,
} from "../../actions/Auth/types";

const initState = {
    user: {},
    isLogin: false,
};
export default function (state = initState, action) {
    switch (action.type) {
        case GET_AUTH:
            return { ...state, user: action.payload, isLogin: true };
        case GET_USER_SUCCESS:
            return { ...state, user: action.payload, isLogin: true };
        case GET_USER_FAIL:
            return { ...state, user: {}, isLogin: false };
        case LOGIN_FAIL:
            return { ...state, user: action.payload, isLogin: false };
        case LOGIN_SUCCESS:
            return { ...state, user: action.payload, isLogin: true };
        case LOGOUT:
            return { ...state, user: action.payload, isLogin: false };
        case REGISTER_FAIL:
            return { ...state, user: action.payload };
        case REGISTER_SUCCESS:
            return { ...state, user: action.payload };
        default:
            return state;
    }
}