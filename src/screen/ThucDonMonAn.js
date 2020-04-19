import React from 'react';
import { useSelector } from 'react-redux';
import MealList from '../components/MealList';

export const ThucDonMonAnScreen = ({route, navigation}) => {

  const {category} = route.params;
  let catId = category.id;
  const avaiableMeals = useSelector(state => state.meals.filteredMeals)
  const displayedMeals = avaiableMeals.filter(
    meal => meal.categoryIds.indexOf(catId) >= 0,
  );

  navigation.setOptions({
    title: category.title,
  });

  return (
      <MealList listData={displayedMeals} navigation={navigation} />
  );
};
