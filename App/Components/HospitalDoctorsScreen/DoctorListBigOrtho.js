import React from 'react'
import { View, Text, TouchableOpacity,ScrollView } from 'react-native'
import DoctorCardItemOrtho from '../Shared/DoctorCardItemOrtho'

export default function DoctorListBigOrtho() {
    return (
        <ScrollView 
        showsVerticalScrollIndicator={false}>
            <DoctorCardItemOrtho/>
        </ScrollView>
    )
}
