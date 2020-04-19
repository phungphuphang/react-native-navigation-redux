import React from 'react';
import {Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import {ThucDonScreen} from '../screen/ThucDon';
import {ThucDonMonAnScreen} from '../screen/ThucDonMonAn';
import {ChiTietMonAnScreen} from '../screen/ChiTietMonAn';
import {YeuThichScreen} from '../screen/YeuThich';
import {FilterScreen} from '../screen/Filter';
import Colors from '../constants/Colors';

const MealStack = createStackNavigator();
const FilterStack = createStackNavigator();
const FavoriteStack = createStackNavigator();
const MealTabs = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const defaultStackNav = {
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white',
  },
};

export default function ThucDonStack() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Meals" component={FavMealTabNavigator} />
        <Drawer.Screen name="Filters" component={FilterNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const FilterNavigator = () => {
  return (
    <FilterStack.Navigator screenOptions={defaultStackNav}>
      <FilterStack.Screen name="Filter" component={FilterScreen} />
    </FilterStack.Navigator>
  );
};

const FavMealTabNavigator = () => {
  return (
    <MealTabs.Navigator
      tabBarOptions={{
        activeTintColor: Colors.accentColor,
      }}>
      <MealTabs.Screen
        name="Meal"
        component={MealStackScreen}
        options={{
          tabBarIcon: tabInfo => {
            return (
              <Icon
                name="ios-restaurant"
                size={25}
                color={Colors.accentColor}
              />
            );
          },
        }}
      />
      <MealTabs.Screen
        name="Favorite"
        component={FavoriteStackScreen}
        options={{
          tabBarIcon: tabInfo => {
            return (
              <Icon name="ios-star" size={25} color={Colors.accentColor} />
            );
          },
        }}
      />
    </MealTabs.Navigator>
  );
};

const MealStackScreen = () => (
  <MealStack.Navigator screenOptions={defaultStackNav}>
    <MealStack.Screen
      name="Home"
      component={ThucDonScreen}
      options={{
        title: 'Thuc don',
      }}
    />
    <MealStack.Screen name="ThucDonMonAn" component={ThucDonMonAnScreen} />
    <MealStack.Screen name="ChiTietMonAn" component={ChiTietMonAnScreen} />
  </MealStack.Navigator>
);

const FavoriteStackScreen = () => (
  <FavoriteStack.Navigator screenOptions={defaultStackNav}>
    <FavoriteStack.Screen name="Favorite" component={YeuThichScreen}/>
  </FavoriteStack.Navigator>
)
