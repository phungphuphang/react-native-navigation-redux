export const FAVORITE_MEAL = 'FAVORITE_MEAL'
export const SET_FILTER = 'SET_FILTER'

export const toggleFavorite = id => {
    return {
        type: FAVORITE_MEAL,
        mealId: id
    }
}

export const setFilter = filterSettings => {
    return {
        type: SET_FILTER,
        filterSettings: filterSettings
    }
}