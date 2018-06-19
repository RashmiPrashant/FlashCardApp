import React from 'react';
import { StyleSheet, Text, View , StatusBar,Platform } from 'react-native';
import { gray, orange , white, purple } from './utils/colors'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux';
import { connect } from 'react-redux'; 
import thunk from 'redux-thunk';
import reducer from './reducers/index';
import { TabNavigator ,StackNavigator} from 'react-navigation';
import Homepage from'./components/Homepage'
import Quiz from './components/Quiz'
import CreateNewCard from './components/CreateNewCard'
import CreateNewDeck from './components/CreateNewDeck'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { Constants } from 'expo'

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


function FlashStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

const Tabs = TabNavigator({
  Homepage: {
    screen: Homepage,
    navigationOptions: {
      tabBarLabel: 'Home'
    },
  },
  CreateNewDeck: {
    screen: CreateNewDeck,
    navigationOptions: {
      tabBarLabel: 'Add new Deck'
    }
  },
  CreateNewCard: {
    screen: CreateNewCard,
    navigationOptions: {
      tabBarLabel: 'Add New Card '
    },
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      tabBarLabel: 'Quiz'
    },
  }
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

const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs,
  },
  Homepage: {
    screen: Homepage,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple,
      }
    }
  }
})


/*

const Tabs = TabNavigator({
  Homepage: {
    screen: Homepage,
    navigationOptions: {
      tabBarLabel: 'Home',
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
    activeTintColor: gray,
    style: {
      height: 56,
      backgroundColor: orange,
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
*/
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
      <View style={{flex: 1}}>
      <FlashStatusBar backgroundColor={purple} barStyle="light-content" />
          <MainNavigator />
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
