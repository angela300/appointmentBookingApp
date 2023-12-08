import React from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import HospitalCardItemDent from '../Shared/HospitalCardItemDent'

export default function HospitalListBigDent() {
    return (
        <ScrollView
        showsVerticalScrollIndicator={false}>
            <HospitalCardItemDent/>
        </ScrollView>
    )
}
