import React from 'react'
import {Text, View, ScrollView} from 'react-native'
import SubHeading from '../Components/Home/SubHeading'
import BookingAppointment from '../Screens/BookAppointment'

export default function Appointment() {
  return (
    <View>
      <ScrollView style={{padding:20}}
        showsVerticalScrollIndicator={false}>
          {/* <SubHeading subHeadingTitle={'My Appointments'} backButton ={false} seeAll={false}/> */}
          <Text style={{
                fontSize: 26,
                fontFamily: 'appfont-semi'
            }}>
                My Appointments
            </Text>
         <BookingAppointment/>
         </ScrollView>
    </View>
  )
}
