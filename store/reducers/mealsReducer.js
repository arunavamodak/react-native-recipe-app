import { MEALS } from "../../data/dummy-data";
import { TOGGLE_FAVOURITE } from "../actions/mealsAction";

const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favouriteMeals: []
}

const mealsReducer = (state = initialState, action) => {
    console.log("hitting red");
    switch (action.type) {
        case TOGGLE_FAVOURITE:
            const index = state.favouriteMeals.findIndex(
                meal => meal.id === action.id
            );
            if (index >= 0) {
                const updatedFavMeals = [...state.favouriteMeals];
                updatedFavMeals.splice(index, 1);
                return { ...state, favouriteMeals: updatedFavMeals };
              } else {
                const meal = state.meals.find(meal => meal.id === action.id);
                return { ...state, favouriteMeals: state.favouriteMeals.concat(meal) };
              }
        default:
            return state;
    }
}


export default mealsReducer;