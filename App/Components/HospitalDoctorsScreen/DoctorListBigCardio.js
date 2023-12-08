import React from 'react'
import { View, Text, TouchableOpacity,ScrollView } from 'react-native'
import DoctorCardItemCardio from '../Shared/DoctorCardItemCardio'

export default function DoctorListBigCardio() {
    return (
        <ScrollView
        showsVerticalScrollIndicator={false}>
                <DoctorCardItemCardio/>
        </ScrollView>
    )
}
