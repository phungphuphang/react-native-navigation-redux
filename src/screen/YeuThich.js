import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux'
import MealList from '../components/MealList';
import DefaultText from '../components/DefaultText'

export const YeuThichScreen = ({navigation}) => {
  const favoriteMeals = useSelector(state => state.meals.favMeals);
  if (favoriteMeals.length === 0 || !favoriteMeals) {
    return (
      <View style={styles.container}>
        <DefaultText>No favorite meals found. Start adding some!</DefaultText>
      </View>
    )
  }
  return (
      <MealList listData={favoriteMeals} navigation={navigation} />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
