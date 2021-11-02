/* eslint-disable import/no-anonymous-default-export */
import { GET_FOOD_LIST_SUCCESS, GET_FOOD_LIST_FAIL } from '../../actions/Food/type';

const initState = {
    listFood: "",
};
export default function (state = initState, action) {
    switch (action.type) {
        case GET_FOOD_LIST_SUCCESS:
            return {
                ...state,
                listFood: action.payload,
            };
        case GET_FOOD_LIST_FAIL:
        default:
            return state;
    }
}