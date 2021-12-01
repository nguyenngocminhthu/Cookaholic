import {
    ADD_TOPIC_FAIL,
    ADD_TOPIC_SUCCESS,
    GET_ALL_TOPIC_FAIL,
    GET_ALL_TOPIC_SUCCESS,
} from "./type";
import TopicAPI from "../../../apis/Topic.Api";

export function addTopicFail() {
    return {
        type: ADD_TOPIC_FAIL,
        payload: {},
    };
}

export function addTopicSuccess(data) {
    return {
        type: ADD_TOPIC_SUCCESS,
        payload: data,
    };
}

export function addTopicAction(dataSubmit) {
    return async (dispatch) => {
        try {
            const res = await TopicAPI.create(dataSubmit);
            console.log('log at ==> topic action ==> res: ', res);
            if (res.success) {

                dispatch(addTopicSuccess(res.data));
                return true;
            }

            dispatch(addTopicFail());
            return false;
        } catch {

            dispatch(addTopicFail());
            return false;
        }
    };
}

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

