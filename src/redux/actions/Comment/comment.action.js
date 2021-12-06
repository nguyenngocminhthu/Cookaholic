import {
    ADD_COMMENT_FAIL,
    ADD_COMMENT_SUCCESS,
    GET_COMMENT_FAIL,
    GET_COMMENT_SUCCESS,

} from "./type";
import CommentAPI from "../../../apis/Comment.Api";
import { changeLoading } from "../System/systemActions";

const loading =
    (loading = false) =>
        (dispatch) => {
            dispatch(changeLoading(loading));
        };

export function addCommentFail() {
    return {
        type: ADD_COMMENT_FAIL,
        payload: {},
    };
}

export function addCommentSuccess(data) {
    return {
        type: ADD_COMMENT_SUCCESS,
        payload: data,
    };
}

export function addCommentAction(dataSubmit) {
    return async (dispatch) => {
        try {
            dispatch(loading(true));
            const res = await CommentAPI.create(dataSubmit);
            console.log('log at ==> Comment action ==> res: ', res);
            if (res.success) {
                dispatch(loading());
                dispatch(addCommentSuccess(res.data));
                return true;
            }
            dispatch(loading());
            dispatch(addCommentFail());
            return false;
        } catch {
            dispatch(loading());
            dispatch(addCommentFail());
            return false;
        }
    };
}


export function getCommentFail() {
    return {
        type: GET_COMMENT_FAIL,
        payload: {},
    };
}

export function getCommentSuccess(data) {
    return {
        type: GET_COMMENT_SUCCESS,
        payload: data,
    };
}

export function getCommentAction(recipe) {
    return async (dispatch) => {
        try {
            dispatch(loading(true));
            const res = await CommentAPI.getByRecipe(recipe);
            if (res.success) {
                dispatch(loading());
                dispatch(getCommentSuccess(res.data));
                return true;
            }
            dispatch(loading());
            dispatch(getCommentFail());
            return false;
        } catch {
            dispatch(loading());
            dispatch(getCommentFail());
            return false;
        }
    };
}