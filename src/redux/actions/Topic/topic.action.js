import {
    GET_ALL_TOPIC_FAIL,
    GET_ALL_TOPIC_SUCCESS,
} from "./type";
import TopicAPI from "../../../apis/Topic.Api";

export function getAllTopicFail() {
    return {
        type: GET_ALL_TOPIC_FAIL,
        payload: {},
    };
}

export function getAllTopicSuccess(data) {
    return {
        type: GET_ALL_TOPIC_SUCCESS,
        payload: data,
    };
}

export function getAllTopicAction() {
    return async (dispatch) => {
        try {
            // dispatch(loading(true));
            const res = await TopicAPI.getAll();
            if (res.success) {

                dispatch(getAllTopicSuccess(res.data));
                return true;
            }
            dispatch(getAllTopicFail());
            return false;
        } catch {

            dispatch(getAllTopicFail());
            return false;
        }
    };
}

