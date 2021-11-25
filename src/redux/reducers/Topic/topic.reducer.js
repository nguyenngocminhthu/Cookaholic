/* eslint-disable import/no-anonymous-default-export */
import {
    GET_ALL_TOPIC_FAIL,
    GET_ALL_TOPIC_SUCCESS,
} from "../../actions/Topic/type";

const initState = {
    listTopic: [],
};
export default function (state = initState, action) {
    const payload = action.payload;
    switch (action.type) {
        case GET_ALL_TOPIC_FAIL:
            return {
                ...state,
                listTopic: [],

            };
        case GET_ALL_TOPIC_SUCCESS:
            return {
                ...state,
                listTopic: action.payload,
            };

        default:
            return state;
    }
}