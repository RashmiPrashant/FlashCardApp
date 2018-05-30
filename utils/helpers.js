import React from 'react'
import { View } from 'react-native'
import { FontAwesome, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'
import { white } from './colors'

export function getDailyReminderValue () {
  return {
    today: "👋 Don't forget to log your data today!"
  }
}

export function timeToString (time = Date.now()) {
    const date = new Date(time)
    const todayUTC = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()))
    return todayUTC.toISOString().split('T')[0]
  }