import React from 'react' 
import {View, Text} from 'react-native'
import SubHeading from './SubHeading'
import HospitalItem from './HospitalItem'

export default function PremiumHospital() {
  return (
    <View style={{marginBottom:10}}>
        <SubHeading subHeadingTitle={'Our Premium Hospitals'}/>
        <HospitalItem/>
    </View>
  )
}
