export const TOGGLE_FAVOURITE = 'TOGGLE_FAVOURITE';
export const FILTER_MEALS = 'FILTER_MEALS';


export const toggleFavourite = (id) => {
    return {
        type: TOGGLE_FAVOURITE,
        id : id
    }
}

export const filterMeals = (filters) => {
    console.log("hitting action");
    return {
        type: FILTER_MEALS,
        filters : filters
    }
}