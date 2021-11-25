
import authReducer from "./Auth/authReducers"
import recipeReducer from './Recipe/recipe.reducer';
import topicReducer from './Topic/topic.reducer';
const rootReducers = {
    auth: authReducer,
    recipe: recipeReducer,
    topic: topicReducer,
};
export default rootReducers;