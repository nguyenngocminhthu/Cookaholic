import { GET_FOOD_LIST_FAIL, GET_FOOD_LIST_SUCCESS } from './type';
//import api

export function getFoodListFail() {
    return {
        type: GET_FOOD_LIST_FAIL,
        payload: {},
    };
}

export function getFoodListSuccess(data) {
    return {
        type: GET_FOOD_LIST_SUCCESS,
        payload: data,
    };
}
