import React from 'react'
import { View, Text, TouchableOpacity,ScrollView } from 'react-native'
import HospitalCardItemCardio from '../Shared/HospitalCardItemCardio'

export default function HospitalListBigCardio() {
    return (
        <ScrollView
        showsVerticalScrollIndicator={false}>
                <HospitalCardItemCardio/>
        </ScrollView>
    )
}
