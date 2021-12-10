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

export function replyCommentFail() {
    return {
        type: REPLY_COMMENT_FAIL,
        payload: {},
    };
}

export function replyCommentSuccess(data) {
    return {
        type: REPLY_COMMENT_SUCCESS,
        payload: data,
    };
}

export function replyCommentAction(dataSubmit) {
    return async (dispatch) => {
        try {
            dispatch(loading(true));
            const res = await CommentAPI.reply(dataSubmit);
            console.log('log at ==> Comment action ==> res: ', res);
            if (res.success) {
                dispatch(loading());
                dispatch(replyCommentSuccess(res.data));
                return true;
            }
            dispatch(loading());
            dispatch(replyCommentFail());
            return false;
        } catch {
            dispatch(loading());
            dispatch(replyCommentFail());
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

export function deleteCmtFail() {
    return {
        type: DELETE_CMT_FAIL,
        payload: {},
    };
}

export function deleteCmtSuccess(data) {
    return {
        type: DELETE_CMT_SUCCESS,
        payload: data,
    };
}

export function deleteCmtAction(dataSubmit) {
    return async (dispatch) => {
        try {
            dispatch(loading(true));
            const res = await CommentAPI.deleteCmt(dataSubmit);
            if (res.success) {
                dispatch(loading());
                dispatch(deleteCmtSuccess(res.data));
                return true;
            }
            dispatch(loading());
            dispatch(deleteCmtFail());
            return false;
        } catch {
            dispatch(loading());
            dispatch(deleteCmtFail());
            return false;
        }
    };
}

export function deleteReplyFail() {
    return {
        type: DELETE_REPLY_FAIL,
        payload: {},
    };
}

export function deleteReplySuccess(data) {
    return {
        type: DELETE_REPLY_SUCCESS,
        payload: data,
    };
}

export function deleteReplyAction(dataSubmit, rep) {
    return async (dispatch) => {
        try {
            dispatch(loading(true));
            const res = await CommentAPI.deleteReply(dataSubmit, rep);
            if (res.success) {
                dispatch(loading());
                dispatch(deleteReplySuccess(res.data));
                return true;
            }
            dispatch(loading());
            dispatch(deleteReplyFail());
            return false;
        } catch {
            dispatch(loading());
            dispatch(deleteReplyFail());
            return false;
        }
    };
}