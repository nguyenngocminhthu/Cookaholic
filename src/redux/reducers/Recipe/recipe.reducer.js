/* eslint-disable import/no-anonymous-default-export */
import {
    ADD_RECIPE_FAIL,
    ADD_RECIPE_SUCCESS,
    GET_ALL_RECIPE_FAIL,
    GET_ALL_RECIPE_SUCCESS,
    FILTER_RECIPE_FAIL,
    FILTER_RECIPE_SUCCESS,
    ACCEPT_POST_FAIL,
    ACCEPT_POST_SUCCESS,
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
        case ACCEPT_POST_FAIL:
            return { ...state };
        case ACCEPT_POST_SUCCESS:
            return { ...state, updateFlag: !state.updateFlag };
        case FILTER_RECIPE_FAIL:
            return {
                ...state,
                listRecipe: [],

            };
        case FILTER_RECIPE_SUCCESS:
            console.log("log at => reducer:", action.payload)
            return {
                ...state,
                listRecipe: action.payload,

            };
        default:
            return state;
    }
}