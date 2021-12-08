import {
    ADD_FAVORITE_FAIL,
    ADD_FAVORITE_SUCCESS,
    GET_STATUS_FAIL,
    GET_STATUS_SUCCESS,
    GET_FAVORITE_FAIL,
    GET_FAVORITE_SUCCESS,
} from "./types";
import RecipeSaveAPI from "../../../apis/RecipeSave.Api";
import { changeLoading } from "../System/systemActions";

const loading =
    (loading = false) =>
        (dispatch) => {
            dispatch(changeLoading(loading));
        };

export function addFavoriteFail() {
    return {
        type: ADD_FAVORITE_FAIL,
        payload: {},
    };
}

export function addFavoriteSuccess(data) {
    return {
        type: ADD_FAVORITE_SUCCESS,
        payload: data,
    };
}

export function addFavoriteAction(recipe, user, status) {
    return async (dispatch) => {
        try {
            dispatch(loading(true));
            const res = await RecipeSaveAPI.save(recipe, user, status);
            console.log('log at ==> recipeSave action ==> res: ', res);
            if (res.success) {
                dispatch(loading());
                dispatch(addFavoriteSuccess(res.data));
                return true;
            }
            dispatch(loading());
            dispatch(addFavoriteFail());
            return false;
        } catch {
            dispatch(loading());
            dispatch(addFavoriteFail());
            return false;
        }
    };
}

export function getStatusFail() {
    return {
        type: GET_STATUS_FAIL,
        payload: {},
    };
}

export function getStatusSuccess(data) {
    return {
        type: GET_STATUS_SUCCESS,
        payload: data,
    };
}

export function getStatusAction(recipe, user) {
    return async (dispatch) => {
        try {
            dispatch(loading(true));
            const res = await RecipeSaveAPI.getStatus(recipe, user);
            console.log("log at => recipeSaveAction => res: ", res)
            if (res.success) {
                dispatch(loading());
                dispatch(getStatusSuccess(res));
                return res.message;
            }
            dispatch(loading());
            dispatch(getStatusFail());
            return false;
        } catch {
            dispatch(loading());
            dispatch(getStatusFail());
            return false;
        }
    };
}

export function getFavoriteFail() {
    return {
        type: GET_FAVORITE_FAIL,
        payload: {},
    };
}

export function getFavoriteSuccess(data) {
    return {
        type: GET_FAVORITE_SUCCESS,
        payload: data,
    };
}

export function getFavoriteAction(user) {
    return async (dispatch) => {
        try {
            dispatch(loading(true));
            const res = await RecipeSaveAPI.getAll(user);
            if (res.success) {
                dispatch(loading());
                dispatch(getFavoriteSuccess(res.data));
                return true;
            }
            dispatch(loading());
            dispatch(getFavoriteFail());
            return false;
        } catch {
            dispatch(loading());
            dispatch(getFavoriteFail());
            return false;
        }
    };
}