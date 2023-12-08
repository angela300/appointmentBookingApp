import React from 'react'
import {View, Text} from 'react-native'
import Colors from '../../../assets/Shared/Colors'

export default function HorizontalLine() {
  return (
    <View style={{
        borderBottomWidth: 1,
        borderColor: Colors.LIGHT_GRAY, 
        marginBottom: 15
    }}>
        <Text></Text>
    </View>
  )
}
