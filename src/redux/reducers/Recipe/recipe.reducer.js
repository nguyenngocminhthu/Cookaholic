/* eslint-disable import/no-anonymous-default-export */
import {
    GET_ALL_RECIPE_FAIL,
    GET_ALL_RECIPE_SUCCESS,
    FILTER_RECIPE_FAIL,
    FILTER_RECIPE_SUCCESS,
} from "../../actions/Recipe/type";

const initState = {
    listRecipe: [],
};
export default function (state = initState, action) {
    const payload = action.payload;
    switch (action.type) {
        case GET_ALL_RECIPE_FAIL:
            return {
                ...state,
                listRecipe: [],

            };
        case GET_ALL_RECIPE_SUCCESS:
            return {
                ...state,
                listRecipe: action.payload,
            };
        case FILTER_RECIPE_FAIL:
            return {
                ...state,
                listRecipe: [],

            };
        case FILTER_RECIPE_SUCCESS:
            return {
                ...state,
                listRecipe: payload.recipes,

            };
        default:
            return state;
    }
}