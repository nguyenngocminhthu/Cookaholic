import {
    ADD_FAVORITE_FAIL,
    ADD_FAVORITE_SUCCESS,
    GET_STATUS_FAIL,
    GET_STATUS_SUCCESS,
} from "../../actions/RecipeSave/types";

const initState = {
    listRecipeSave: [],
    recipeStatus: {},
};

export default function (state = initState, action) {
    const payload = action.payload;
    switch (action.type) {
        case ADD_FAVORITE_FAIL:
            return { ...state };
        case ADD_FAVORITE_SUCCESS:
            return { ...state };

        case GET_STATUS_FAIL:
            return {
                ...state,
                listRecipeSave: [],

            };
        case GET_STATUS_SUCCESS:
            return {
                ...state,
                listRecipeSave: action.payload,
            };

        default:
            return state;
    }
}