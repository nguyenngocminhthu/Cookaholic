/* eslint-disable import/no-anonymous-default-export */
import {
    ADD_COMMENT_FAIL,
    ADD_COMMENT_SUCCESS,
    GET_ALL_COMMENT_FAIL,
    GET_ALL_COMMENT_SUCCESS,
} from "../../actions/Comment/type";

const initState = {
    listComment: [],
    commentDetail: {},
};
export default function (state = initState, action) {
    const payload = action.payload;
    switch (action.type) {
        case ADD_COMMENT_FAIL:
            return { ...state };
        case ADD_COMMENT_SUCCESS:
            return { ...state };
        case GET_ALL_COMMENT_FAIL:
            return {
                ...state,
                listComment: [],

            };
        case GET_ALL_COMMENT_SUCCESS:
            return {
                ...state,
                listComment: action.payload,
            };

        default:
            return state;
    }
}