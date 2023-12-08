import React from 'react'
import {Text, View, TouchableOpacity, Title} from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation} from '@react-navigation/native'

export default function PageHeaderDent({Title}) {
  const navigation = useNavigation();
  return (
    <View style={{padding:20,
      display:'flex', flexDirection: 'row', gap: 5, alignItems: 'center'}}>
        <TouchableOpacity onPress = {()=>navigation.goBack()}>
          <Ionicons name="arrow-back-circle-outline" size={37} color="black" />
        </TouchableOpacity>
        <Text style={{ fontSize: 25, fontFamily: 'appfont-semi' }}>{Title}</Text>
    </View>
  )
}
