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
    DELETE_USER_FAIL,
    DELETE_USER_SUCCESS,
} from "../../actions/User/type";

const initState = {
    listUser: [],
    updateFlag: false,
    profile: {},
};

export default function (state = initState, action) {
    const payload = action.payload;
    switch (action.type) {

        case GET_ALL_USER_FAIL:
            return {
                ...state,
                listUser: [],
            };
        case GET_ALL_USER_SUCCESS:
            console.log("log at => userreducer:", action.payload)
            return {
                ...state,
                listUser: action.payload,
            };
        case FIND_USER_BY_ID_FAIL:
            return {
                ...state,
                profile: {},
            };
        case FIND_USER_BY_ID_SUCCESS:
            return {
                ...state,
                profile: action.payload,
            };
        case UPDATE_USER_FAIL:
            return { ...state };
        case UPDATE_USER_SUCCESS:
            return { ...state };
        case CHANGE_PASS_FAIL:
            return { ...state };
        case CHANGE_PASS_SUCCESS:
            return { ...state };
        case ADD_ADMIN_FAIL:
            return { ...state };
        case ADD_ADMIN_SUCCESS:
            return { ...state };
        case DELETE_USER_FAIL:
            return { ...state };
        case DELETE_USER_SUCCESS:
            return { ...state };
        default:
            return state;
    }
}