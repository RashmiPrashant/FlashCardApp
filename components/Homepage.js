import React from "react";
import { StyleSheet, Text, View , Platform, StatusBar} from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import DateHeader from './DateHeader'

export default class Homepage extends React.Component {
    render() {
        return (
            <View>
            <DateHeader date={(new Date()).toLocaleDateString()}/>
                <Text>View all available decks here !!</Text>
            </View>

        )
    }
}