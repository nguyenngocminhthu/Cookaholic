import foodReducer from './Food/food.reducer';
import authReducer from "./Auth/authReducers"
const rootReducers = {
    auth: authReducer,
    food: foodReducer,
};
export default rootReducers;