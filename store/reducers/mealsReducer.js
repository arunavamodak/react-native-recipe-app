import { MEALS } from "../../data/dummy-data";
import { TOGGLE_FAVOURITE, FILTER_MEALS } from "../actions/mealsAction";

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
        case FILTER_MEALS:
            const filteredMeals = state.meals.filter(item => {
                if (item.isGlutenFree && !action.filters.isGlutenFree) {
                    return false;
                }
                if (item.isVegan && !action.filters.isVegan) {
                    return false;
                }
                if (item.isVegetarian && !action.filters.isVegetarian) {
                    return false;
                }
                if (item.isLactoseFree && !action.filters.isLactoseFree) {
                    return false;
                }

                return true;
            })

            return {
                ...state,
                filteredMeals: filteredMeals
            };
        default:
            return state;
    }
}


export default mealsReducer;