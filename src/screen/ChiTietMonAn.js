import React, {useEffect, useCallback} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {toggleFavorite} from '../store/actions/meal';
import Colors from '../constants/Colors';
import DefaultText from '../components/DefaultText';

const ListItem = props => {
  return (
    <View style={styles.listItem}>
      <DefaultText>{props.children}</DefaultText>
    </View>
  );
};

export const ChiTietMonAnScreen = ({route, navigation}) => {
  const {meal} = route.params;
  const {mealTitle} = route.params;
  const mealId = meal.id;

  const mealIsFavorite = useSelector(state =>
    state.meals.favMeals.some(meal => meal.id === mealId),
  );

  const toggleDispatch = useDispatch();

  const toggleFavoriteButtonHandle = useCallback(() => {
    toggleDispatch(toggleFavorite(mealId));
  }, [toggleDispatch, mealId]);

  useEffect(() => {
    navigation.setParams({
      toggleFav: toggleFavoriteButtonHandle,
    });
  }, [toggleFavoriteButtonHandle]);

  useEffect(() => {
    navigation.setParams({
      isFav: mealIsFavorite,
    });
  }, [mealIsFavorite]);

  navigation.setOptions({
    headerTitle: mealTitle,
    headerRight: () => (
      <TouchableOpacity onPress={route.params.toggleFav}>
        <Icon
          name={route.params.isFav ? 'ios-star' : 'ios-star-outline'}
          size={25}
          color={Colors.accentColor}
        />
      </TouchableOpacity>
    ),
  });

  return (
    <ScrollView>
      <Image source={{uri: meal.imageUrl}} style={styles.image} />
      <View style={styles.detail}>
        <Text>{meal.duration}m</Text>
        <Text>{meal.complexity.toUpperCase()}</Text>
        <Text>{meal.affordability.toUpperCase()}</Text>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {meal.ingredients.map(ingredient => (
        <ListItem key={ingredient}>{ingredient}</ListItem>
      ))}
      <Text style={styles.title}>Steps</Text>
      {meal.steps.map(step => (
        <ListItem key={step}>{step}</ListItem>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  detail: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  listItem: {
    marginHorizontal: 20,
    marginVertical: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
  },
});
