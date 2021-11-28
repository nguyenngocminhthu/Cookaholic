import {
    ADD_RECIPE_FAIL,
    ADD_RECIPE_SUCCESS,
    GET_ALL_RECIPE_FAIL,
    GET_ALL_RECIPE_SUCCESS,
    FILTER_RECIPE_FAIL,
    FILTER_RECIPE_SUCCESS,
    ACCEPT_POST_FAIL,
    ACCEPT_POST_SUCCESS,
} from "./type";
import RecipeAPI from "../../../apis/Recipe.Api";

export function addRecipeFail() {
    return {
        type: ADD_RECIPE_FAIL,
        payload: {},
    };
}

export function addRecipeSuccess(data) {
    return {
        type: ADD_RECIPE_SUCCESS,
        payload: data,
    };
}

export function addRecipeAction(dataSubmit) {
    return async (dispatch) => {
        try {
            const res = await RecipeAPI.create(dataSubmit);
            console.log('log at ==> recipe action ==> res: ', res);
            if (res.success) {

                dispatch(addRecipeSuccess(res.data));
                return true;
            }

            dispatch(addRecipeFail());
            return false;
        } catch {

            dispatch(addRecipeFail());
            return false;
        }
    };
}


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

export function getAllRecipeAction(status) {
    return async (dispatch) => {
        try {
            // dispatch(loading(true));
            const res = await RecipeAPI.getAll(status);
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

export function acceptPostFail() {
    return {
        type: ACCEPT_POST_FAIL,
        payload: {},
    };
}

export function acceptPostSuccess(data) {
    return {
        type: ACCEPT_POST_SUCCESS,
        payload: data,
    };
}

export function acceptPostAction(dataSubmit) {
    return async (dispatch) => {
        try {

            const res = await RecipeAPI.acceptPost(dataSubmit);
            if (res.success) {

                dispatch(acceptPostSuccess(res.data));
                return true;
            }

            dispatch(acceptPostFail());
            return false;
        } catch {

            dispatch(acceptPostFail());
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

export function filterRecipeAction(id) {
    return async (dispatch) => {
        try {
            const res = await RecipeAPI.filter(id);
            console.log("log at ==> action: res: ", res)
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
