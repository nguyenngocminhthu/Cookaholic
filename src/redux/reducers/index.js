
import authReducer from "./Auth/authReducers"
import recipeReducer from './Recipe/recipe.reducer';
import topicReducer from './Topic/topic.reducer';
import userReducer from './User/user.reducer';
import systemReducers from "./System/systemReducers";
import recipeSaveReducer from "./RecipeSave/recipeSave.reducer";
const rootReducers = {
    auth: authReducer,
    recipe: recipeReducer,
    topic: topicReducer,
    user: userReducer,
    system: systemReducers,
    recipesave: recipeSaveReducer,
};
export default rootReducers;