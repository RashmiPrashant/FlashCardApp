import React, { Component } from "react";
import { View, TouchableOpacity, Text, StyleSheet, Platform, StatusBar} from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import DateHeader from './DateHeader'
import { connect } from "react-redux"
import { loadDeck } from "../actions"; 
import { getDecks } from "../utils/api";
import { StackNavigator } from 'react-navigation'  
import { gray, orange , white, purple } from '../utils/colors'


class Homepage extends React.Component {
    componentDidMount(){ 
        const { dispatch } = this.props;
        getDecks().then(decks => dispatch(loadDeck(decks)));
 	} 
        
    render() {
        //console.log("props" , this.props)
        const { decks , navigation } = this.props;
        return (
            <View>
              <DateHeader date={(new Date()).toLocaleDateString()}/>
              {Object.keys(decks).map(deck =>{
               const { title , questions } = decks[deck]
               console.log("title" , title)
               return(
                 <View>
                   <Text>{title}</Text>
                   <Text>{questions.length}</Text>
                 </View>
               )
                 
                })
              }
              
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: white
    },
    row: {
      flexDirection: 'row',
      flex: 1,
      alignItems: 'center',
    },
    iosSubmitBtn: {
      backgroundColor: purple,
      padding: 10,
      borderRadius: 7,
      height: 45,
      marginLeft: 40,
      marginRight: 40,
    },
    AndroidSubmitBtn: {
      backgroundColor: purple,
      padding: 10,
      paddingLeft: 30,
      paddingRight: 30,
      height: 45,
      borderRadius: 2,
      alignSelf: 'flex-end',
      justifyContent: 'center',
      alignItems: 'center',
    },
    submitBtnText: {
      color: white,
      fontSize: 22,
      textAlign: 'center',
    },
    center: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 30,
      marginRight: 30,
    },
  })
  
const mapStateToProps = decks => ({ 
   decks 
 }); 
    
export default connect(mapStateToProps)(Homepage)