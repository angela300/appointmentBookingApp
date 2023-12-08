import React from 'react'
import {View, Text, ScrollView} from 'react-native'
import AppointmentHospitalInfo from '../Components/BookAppointment/AppointmentHospitalInfo'
import ActionButton from '../Components/HospitalDetail/ActionButton'
import HorizontalLine from '../Components/Shared/HorizontalLine'
import BookingSection from '../Components/BookAppointment/BookingSection'
import Colors from '../../assets/Shared/Colors'

export default function BookAppointment() {
  return (
    <View>
        <AppointmentHospitalInfo/>
        <ActionButton/>
        <HorizontalLine/>
        <BookingSection/>
    </View>
  )
}
