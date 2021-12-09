import validator from "validator";
import toastNotify from "../../Toastify/toastNotify";

const validateAddRecipe = (serving) => {

    const isInt = validator.isInt(serving, { min: 1, max: Infinity })
    const isServing = validator.isEmpty(serving);
    if (isServing && !isInt) {
        toastNotify("Serving must be a number");
        return false;
    }
    return {
        serving,

    };
};


export { validateAddRecipe }