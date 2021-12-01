/* eslint-disable import/no-anonymous-default-export */
import {
    GET_AUTH,
    GET_AUTH_FAIL,
    GET_AUTH_SUCCESS,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT,
    REGISTER_FAIL,
    REGISTER_SUCCESS,
} from "../../actions/Auth/types";

const initState = {
    user: {
        roles: ["ROLE_GUEST"]
    },
    isLogin: false,
    isRegister: false,
};
export default function (state = initState, action) {
    switch (action.type) {
        case GET_AUTH_SUCCESS:
            return { ...state, user: {...action.payload.user, roles: action.payload.role}, isLogin: true };
        case GET_AUTH_FAIL:
            return { ...state, user: { roles: ["ROLE_GUEST"] }, isLogin: false };
        case LOGIN_FAIL:
            return { ...state, user: { roles: ["ROLE_GUEST"] }, isLogin: false };
        case LOGIN_SUCCESS:
            return { ...state, user: action.payload, isLogin: true };
        case LOGOUT:
            return { ...state, user: { roles: ["ROLE_GUEST"] }, isLogin: false };
        case REGISTER_FAIL:
            return { ...state, user: action.payload, isRegister: false };
        case REGISTER_SUCCESS:
            return { ...state, user: action.payload, isRegister: true };
        default:
            return state;
    }
}