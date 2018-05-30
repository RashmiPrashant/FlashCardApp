import React from "react";
import { StyleSheet, Text, View , Platform, StatusBar} from 'react-native';
import DateHeader from './DateHeader'
import {
    timeToString,
    getDailyReminderValue
  } from '../utils/helpers'
import { Ionicons } from '@expo/vector-icons'
import TextButton from './TextButton'

export default class HomePage extends React.Component {
    render() {
        return (
            <View>
            <DateHeader date={(new Date()).toLocaleDateString()}/>
            
        </View>

        )
    }
}