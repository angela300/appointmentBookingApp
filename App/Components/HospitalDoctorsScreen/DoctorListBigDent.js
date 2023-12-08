import React from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import DoctorCardItemDent from '../Shared/DoctorCardItemDent'

export default function DoctorListBigDent() {
    return (
        <ScrollView
        showsVerticalScrollIndicator={false}>
            <DoctorCardItemDent/>
        </ScrollView>
    )
}
