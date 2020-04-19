import React, {useState, useEffect, useCallback} from 'react';
import {View, Text, StyleSheet, Switch, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/Colors';

const FilterItem = props => {
  return (
    <View style={styles.filterContainer}>
      <Text>{props.label}</Text>
      <Switch
        trackColor={{true: Colors.primaryColor}}
        value={props.state}
        onValueChange={props.onChange}
      />
    </View>
  );
};

export const FilterScreen = ({navigation, route}) => {
  const [isGluenFree, setIsGluenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegen] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      gluenFree: isGluenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      vegetarian: isVegetarian,
    };

    console.log(appliedFilters);
  }, [isGluenFree, isLactoseFree, isVegan, isVegetarian]);

  useEffect(() => {
    navigation.setParams({
      filters: saveFilters,
    });
  }, [saveFilters]);

  navigation.setOptions({
    headerLeft: () => {
      return (
        <TouchableOpacity
          onPress={() => {
            navigation.toggleDrawer();
          }}>
          <Icon name="ios-menu" size={25} color={Colors.primaryColor} />
        </TouchableOpacity>
      );
    },
    headerRight: () => {
      return (
        <TouchableOpacity onPress={route.params.filters}>
          <Icon name="ios-save" size={25} color={Colors.primaryColor} />
        </TouchableOpacity>
      );
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Availaber Filters / Restrictions</Text>
      <FilterItem
        label="Gluen-free"
        state={isGluenFree}
        onChange={newValue => setIsGluenFree(newValue)}
      />
      <FilterItem
        label="Lactose-free"
        state={isLactoseFree}
        onChange={newValue => setIsLactoseFree(newValue)}
      />
      <FilterItem
        label="Vegan"
        state={isVegan}
        onChange={newValue => setIsVegen(newValue)}
      />
      <FilterItem
        label="Vegetarian"
        state={isVegetarian}
        onChange={newValue => setIsVegetarian(newValue)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 20,
  },
  filterContainer: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
});
