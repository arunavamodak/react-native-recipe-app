export const TOGGLE_FAVOURITE = 'TOGGLE_FAVOURITE';


export const toggleFavourite = (id) => {
    console.log("hitting action");
    return {
        type: TOGGLE_FAVOURITE,
        id : id
    }
}