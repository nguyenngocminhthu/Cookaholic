
import authReducer from "./Auth/authReducers"
import recipeReducer from './Recipe/recipe.reducer';
import topicReducer from './Topic/topic.reducer';
import userReducer from './User/user.reducer';
import systemReducers from "./System/systemReducers";
const rootReducers = {
    auth: authReducer,
    recipe: recipeReducer,
    topic: topicReducer,
    user: userReducer,
    system: systemReducers,
};
export default rootReducers;