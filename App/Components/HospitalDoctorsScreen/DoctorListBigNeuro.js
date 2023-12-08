import React from 'react'
import { View, Text, TouchableOpacity, ScrollView} from 'react-native'
import DoctorCardItemNeuro from '../Shared/DoctorCardItemNeuro'

export default function DoctorListBigNeuro() {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <DoctorCardItemNeuro/>
        </ScrollView>
    )
}
