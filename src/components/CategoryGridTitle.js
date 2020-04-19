import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
const CategoryGridTitle = props => {
  return (
    <TouchableOpacity style={styles.gidItem} onPress={props.onSelect}>
      <View View style={{...styles.container, backgroundColor: props.color}}>
        <Text style={styles.title} number={2}>
          {props.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  gidItem: {
    flex: 1,
    height: 150,
    margin: 15,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    borderRadius: 10,
    shadowColor: 'black',
    shadowRadius: 10,
    shadowOpacity: 0.26,
    padding: 15,
    shadowOffset: {width: 0, height: 2},
    elevation: 3,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    textAlign: 'right',
  },
});

export default CategoryGridTitle;
