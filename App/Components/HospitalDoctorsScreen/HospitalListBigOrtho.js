import React from 'react'
import { View, Text, TouchableOpacity,ScrollView } from 'react-native'
import HospitalCardItemOrtho from '../Shared/HospitalCardItemOrtho'

export default function HospitalListBigOrtho() {
    return (
        <ScrollView 
        showsVerticalScrollIndicator={false}>
            <HospitalCardItemOrtho/>
        </ScrollView>
    )
}
