import {
    ADD_RECIPE_FAIL,
    ADD_RECIPE_SUCCESS,
    GET_ALL_RECIPE_FAIL,
    GET_ALL_RECIPE_SUCCESS,
    FILTER_RECIPE_FAIL,
    FILTER_RECIPE_SUCCESS,
    ACCEPT_POST_FAIL,
    ACCEPT_POST_SUCCESS,
    DELETE_POST_FAIL,
    DELETE_POST_SUCCESS,
    FIND_RECIPE_BY_ID_FAIL,
    FIND_RECIPE_BY_ID_SUCCESS,
    FIND_RECIPE_BY_USER_FAIL,
    FIND_RECIPE_BY_USER_SUCCESS,
    UPDATE_RECIPE_FAIL,
    UPDATE_RECIPE_SUCCESS,
} from "./type";
import RecipeAPI from "../../../apis/Recipe.Api";
import { changeLoading } from "../System/systemActions";

const loading =
    (loading = false) =>
        (dispatch) => {
            dispatch(changeLoading(loading));
        };

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
            dispatch(loading(true));
            const res = await RecipeAPI.create(dataSubmit);
            console.log('log at ==> recipe action ==> res: ', res);
            if (res.success) {
                dispatch(loading());
                dispatch(addRecipeSuccess(res.data));
                return true;
            }
            dispatch(loading());
            dispatch(addRecipeFail());
            return false;
        } catch {
            dispatch(loading());
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
            dispatch(loading(true));
            const res = await RecipeAPI.getAll(status);
            if (res.success) {
                dispatch(loading());
                dispatch(getAllRecipeSuccess(res.data));
                return true;
            }
            dispatch(loading());
            dispatch(getAllRecipeFail());
            return false;
        } catch {
            dispatch(loading());
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
            dispatch(loading(true));
            const res = await RecipeAPI.acceptPost(dataSubmit);
            if (res.success) {
                dispatch(loading());
                dispatch(acceptPostSuccess(res.data));
                return true;
            }
            dispatch(loading());
            dispatch(acceptPostFail());
            return false;
        } catch {
            dispatch(loading());
            dispatch(acceptPostFail());
            return false;
        }
    };
}

export function deletePostFail() {
    return {
        type: DELETE_POST_FAIL,
        payload: {},
    };
}

export function deletePostSuccess(data) {
    return {
        type: DELETE_POST_SUCCESS,
        payload: data,
    };
}

export function deletePostAction(dataSubmit) {
    return async (dispatch) => {
        try {
            dispatch(loading(true));
            const res = await RecipeAPI.deletePost(dataSubmit);
            if (res.success) {
                dispatch(loading());
                dispatch(deletePostSuccess(res.data));
                return true;
            }
            dispatch(loading());
            dispatch(deletePostFail());
            return false;
        } catch {
            dispatch(loading());
            dispatch(deletePostFail());
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
            dispatch(loading(true));
            const res = await RecipeAPI.filter(id);
            console.log("log at ==> action: res: ", res)
            if (res.success) {
                dispatch(loading());
                dispatch(filterRecipeSuccess(res.data));
                return true;
            }
            dispatch(loading());
            dispatch(filterRecipeFail());
            return false;
        } catch {
            dispatch(loading());
            dispatch(filterRecipeFail());
            return false;
        }
    };
}

export function findRecipeByIdFail() {
    return {
        type: FIND_RECIPE_BY_ID_FAIL,
        payload: {},
    };
}

export function findRecipeByIdSuccess(data) {
    return {
        type: FIND_RECIPE_BY_ID_SUCCESS,
        payload: data,
    };
}

export function findRecipeByIdAction(id) {
    return async (dispatch) => {
        try {
            dispatch(loading(true));
            const res = await RecipeAPI.findById(id);
            if (res.success) {
                dispatch(loading());
                dispatch(findRecipeByIdSuccess(res.data));
                return true;
            }
            dispatch(loading());
            dispatch(findRecipeByIdFail());
            return false;
        } catch {
            dispatch(loading());
            dispatch(findRecipeByIdFail());
            return false;
        }
    };
}

export function findRecipeByUserFail() {
    return {
        type: FIND_RECIPE_BY_USER_FAIL,
        payload: {},
    };
}

export function findRecipeByUserSuccess(data) {
    return {
        type: FIND_RECIPE_BY_USER_SUCCESS,
        payload: data,
    };
}

export function findRecipeByUserAction(id, status) {
    return async (dispatch) => {
        try {
            dispatch(loading(true));
            const res = await RecipeAPI.findByUser(id, status);
            if (res.success) {
                dispatch(loading());
                dispatch(findRecipeByUserSuccess(res.data));
                return true;
            }
            dispatch(loading());
            dispatch(findRecipeByUserFail());
            return false;
        } catch {
            dispatch(loading());
            dispatch(findRecipeByUserFail());
            return false;
        }
    };
}

export function updateRecipeFail() {
    return {
        type: UPDATE_RECIPE_FAIL,
        payload: {},
    };
}

export function updateRecipeSuccess(data) {
    return {
        type: UPDATE_RECIPE_SUCCESS,
        payload: data,
    };
}

export function updateRecipeAction(id, dataSubmit) {
    return async (dispatch) => {
        try {
            dispatch(loading(true));
            const res = await RecipeAPI.update(id, dataSubmit);
            if (res.success) {
                dispatch(loading());
                dispatch(updateRecipeSuccess(res.data));
                return true;
            }
            dispatch(loading());
            dispatch(updateRecipeFail());
            return false;
        } catch {
            dispatch(loading());
            dispatch(updateRecipeFail());
            return false;
        }
    };
}
