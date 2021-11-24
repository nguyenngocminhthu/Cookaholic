import {
    GET_ALL_RECIPE_FAIL,
    GET_ALL_RECIPE_SUCCESS,
    FILTER_RECIPE_FAIL,
    FILTER_RECIPE_SUCCESS,
} from "./type";
import RecipeAPI from "../../../apis/Recipe.Api";

export function getAllRecipeFail() {
    return {
        type: GET_ALL_RECIPE_FAIL,
        payload: {},
    };
}

export function getAllRecipeSuccess(data) {
    return {
        type: GET_ALL_RECIPE_SUCCESS,
        payload: data,
    };
}

export function getAllRecipeAction() {
    return async (dispatch) => {
        try {
            // dispatch(loading(true));
            const res = await RecipeAPI.getAll();
            if (res.success) {

                dispatch(getAllRecipeSuccess(res.data));
                return true;
            }
            dispatch(getAllRecipeFail());
            return false;
        } catch {

            dispatch(getAllRecipeFail());
            return false;
        }
    };
}

export function filterRecipeFail() {
    return {
        type: FILTER_RECIPE_FAIL,
        payload: {},
    };
}

export function filterRecipeSuccess(data) {
    return {
        type: FILTER_RECIPE_SUCCESS,
        payload: data,
    };
}

export function filterRecipeAction(queryParams) {
    return async (dispatch) => {
        try {

            const res = await RecipeAPI.filter(queryParams);
            if (res.success) {

                dispatch(filterRecipeSuccess(res.data));
                return true;
            }

            dispatch(filterRecipeFail());
            return false;
        } catch {

            dispatch(filterRecipeFail());
            return false;
        }
    };
}
