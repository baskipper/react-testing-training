import {SET_CATEGORIES, PICK_CATEGORY} from "./types";

export const setCategories = (categories) => {
    return {
        type: SET_CATEGORIES,
        categories
    }
};


export const pickCategory = (category) => {
    return {
        type: PICK_CATEGORY,
        category
    }
}
