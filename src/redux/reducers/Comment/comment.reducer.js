/* eslint-disable import/no-anonymous-default-export */
import {
    ADD_COMMENT_FAIL,
    ADD_COMMENT_SUCCESS,
    REPLY_COMMENT_FAIL,
    REPLY_COMMENT_SUCCESS,
    GET_COMMENT_FAIL,
    GET_COMMENT_SUCCESS,
    DELETE_CMT_FAIL,
    DELETE_CMT_SUCCESS,
    DELETE_REPLY_FAIL,
    DELETE_REPLY_SUCCESS,
} from "../../actions/Comment/type";

const initState = {
    listComment: [],
    commentDetail: {},
};
export default function (state = initState, action) {
    switch (action.type) {
        case ADD_COMMENT_FAIL:
            return { ...state };
        case ADD_COMMENT_SUCCESS:
            return {
                ...state,
            };
        case REPLY_COMMENT_FAIL:
            return { ...state };
        case REPLY_COMMENT_SUCCESS:
            return { ...state };
        case GET_COMMENT_FAIL:
            return {
                ...state,
                listComment: [],
            };
        case GET_COMMENT_SUCCESS:
            return {
                ...state,
                listComment: action.payload,
            };
        case DELETE_CMT_FAIL:
            return { ...state };
        case DELETE_CMT_SUCCESS:
            return { ...state };
        case DELETE_REPLY_FAIL:
            return { ...state };
        case DELETE_REPLY_SUCCESS:
            return { ...state };
        default:
            return state;
    }
}