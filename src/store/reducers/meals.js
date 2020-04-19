import {MEALS} from '../../data/dummy-data';
import {FAVORITE_MEAL, SET_FILTER} from '../actions/meal';

const initalState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favMeals: [],
};
const mealReducer = (state = initalState, action) => {
  switch (action.type) {
    case FAVORITE_MEAL:
      const existFavoriteMeal = state.favMeals.findIndex(
        meal => meal.id === action.mealId,
      );
      if (existFavoriteMeal >= 0) {
        const favoritedMeals = [...state.favMeals];
        favoritedMeals.splice(existFavoriteMeal, 1);
        return {...state, favMeals: favoritedMeals};
      } else {
        const meal = state.meals.find(meal => meal.id === action.mealId);
        return {...state, favMeals: state.favMeals.concat(meal)};
      }
    case SET_FILTER:
      const appliedFilters = action.filters
      const filteredMeals = state.meals.filter(meal => {
        if (appliedFilters.gluenFree && !meal.isGlutenFree) {
          return false
        }
        if (appliedFilters.vegan && !meal.isVegan) {
          return false
        }
        if (appliedFilters.vegetarian && !meal.isVegetarian) {
          return false
        }
        if (appliedFilters.lactoseFree && !meal.isLactoseFree) {
          return false
        }
        return true
      })
      return {...state, filteredMeals: filteredMeals}
    default:
      return state;
  }
};

export default mealReducer;
