/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import ThucDonStack from './src/navigation/Router'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import mealReducer from './src/store/reducers/meals'

const rootReducer = combineReducers({
  meals: mealReducer,
});

const store = createStore(rootReducer);

class App extends Component {
  render() {
    return(
      <Provider store={store}>
        <ThucDonStack/>
      </Provider>
    )
  }
}


export default App;
