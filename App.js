import React from 'react';
import { StyleSheet, Text, View , Platform, StatusBar} from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux';
import { connect } from 'react-redux'; 
import thunk from 'redux-thunk';
import reducer from './reducers/index';



/*const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {
    return createStore(
        reducer,
        composeEnhancers(
            applyMiddleware(thunk)
        )
    )
}; 
const store = configureStore();
console.log(store)
*/



export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
      <View style={styles.container}>
        <Text>App.js</Text>
      </View>
    </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
