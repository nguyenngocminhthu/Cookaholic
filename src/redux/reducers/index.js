
import authReducer from "./Auth/authReducers"
import recipeReducer from './Recipe/recipe.reducer';
const rootReducers = {
    auth: authReducer,
    recipe: recipeReducer,
};
export default rootReducers;