import React from 'react'
import { Text } from 'react-native'
import { orange } from '../utils/colors'

export default function DateHeader ({ date }) {
  return (
    <Text style={{color: orange, fontSize: 25}}>
      {date}
    </Text>
  )
}