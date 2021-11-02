/* eslint-disable import/no-anonymous-default-export */
import { LOADING } from "../../actions/System/types";

const initState = {
    loading: false,
};
export default function (state = initState, action) {
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                loading: action.payload,
            };
        default:
            return state;
    }
}