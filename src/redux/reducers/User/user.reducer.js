import {
    GET_ALL_USER_FAIL,
    GET_ALL_USER_SUCCESS,
} from "../../actions/User/type";

const initState = {
    listUser: [],
    updateFlag: false,
};

export default function (state = initState, action) {
    const payload = action.payload;
    switch (action.type) {

        case GET_ALL_USER_FAIL:
            return {
                ...state,
                listUser: [],
            };
        case GET_ALL_USER_SUCCESS:
            console.log("log at => userreducer:", action.payload)
            return {
                ...state,
                listUser: action.payload,
            };

        default:
            return state;
    }
}