/* eslint-disable import/no-anonymous-default-export */
import {
    ADD_RECIPE_FAIL,
    ADD_RECIPE_SUCCESS,
    GET_ALL_RECIPE_FAIL,
    GET_ALL_RECIPE_SUCCESS,
    FILTER_RECIPE_FAIL,
    FILTER_RECIPE_SUCCESS,
} from "../../actions/Recipe/type";

const initState = {
    listRecipe: [],
    updateFlag: false,
};
export default function (state = initState, action) {
    const payload = action.payload;
    switch (action.type) {
        case ADD_RECIPE_FAIL:
            return { ...state };
        case ADD_RECIPE_SUCCESS:
            return { ...state, updateFlag: !state.updateFlag };
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