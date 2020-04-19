import React, {useState} from 'react';
import {FlatList, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import {CATEGORIES} from '../data/dummy-data';
import CategoryGridTitle from '../components/CategoryGridTitle';
import Colors from '../constants/Colors';

export const ThucDonScreen = ({navigation}) => {

  const [count, setCount] = useState(0);

  const renderGridItem = itemData => {
    return (
      <CategoryGridTitle
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          navigation.navigate('ThucDonMonAn', {
            category: itemData.item,
          });
        }}
      />
    );
  };

 function counter() {
    setCount(count + 1);
    console.log(setCount)
  }

  navigation.setOptions({
    headerLeft: () => (
      <TouchableOpacity onPress={() => {
        navigation.toggleDrawer()
      }}>
        <Icon name='ios-menu' size={25} color={Colors.primaryColor} />
      </TouchableOpacity>
    ),
    headerRight: () => (
      <TouchableOpacity onPress={
        () => {
          console.log(count)
          setCount(count + 1) 
          }
      }>
        <Icon name='ios-menu' size={25} color={Colors.primaryColor} />
      </TouchableOpacity>
    )
  });

  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
};

ThucDonScreen.navigationOptions = {
  headerTitle: 'Thuc don',
};
