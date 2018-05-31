import React from 'react';
import { StyleSheet, Text, View , Platform, StatusBar,AppRegistry,TouchableOpacity } from 'react-native';
import { gray, orange , white, purple } from './utils/colors'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux';
import { connect } from 'react-redux'; 
import thunk from 'redux-thunk';
import reducer from './reducers/index';
import { TabNavigator } from 'react-navigation';
import Decks from'./components/Decks'
import Quiz from './components/Quiz'
import CreateNewCard from './components/CreateNewCard'
import CreateNewDeck from './components/CreateNewDeck'
import { FontAwesome, Ionicons } from '@expo/vector-icons'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {
    return createStore(
        reducer,
        composeEnhancers(
            applyMiddleware(thunk)
        )
    )
}; 
const store = configureStore();


const Tabs = TabNavigator({
  Decks: {
    screen: Decks,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={30} color={tintColor} />
    },
  },
  CreateNewCard: {
    screen: CreateNewCard,
    navigationOptions: {
      tabBarLabel: 'Create Card',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={30} color={tintColor} />
    },
  },CreateNewDeck: {
    screen: CreateNewDeck,
    navigationOptions: {
      tabBarLabel: 'Create Deck',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={30} color={tintColor} />
    },
  },Quiz: {
    screen: Quiz,
    navigationOptions: {
      tabBarLabel: 'Quiz',
      tabBarIcon: ({ tintColor }) => <FontAwesome name='plus-square' size={30} color={tintColor} />
    },
  },
}, {
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
    activeTintColor: Platform.OS === 'ios' ? purple : white,
    style: {
      height: 56,
      backgroundColor: Platform.OS === 'ios' ? white : purple,
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
})

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
      <View style={{flex: 1}}>
          <Tabs />
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
