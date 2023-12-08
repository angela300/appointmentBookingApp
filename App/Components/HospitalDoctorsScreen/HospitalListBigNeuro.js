import React from 'react'
import { View, Text, TouchableOpacity, ScrollView} from 'react-native'
import HospitalCardItemNeuro from '../Shared/HospitalCardItemNeuro'

export default function HospitalListBigNeuro() {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <HospitalCardItemNeuro/>
        </ScrollView>
    )
}
