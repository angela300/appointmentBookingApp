import React from 'react'
import {View, Text} from 'react-native'
import Home from '../Screens/Home'
import {createStackNavigator} from '@react-navigation/stack'
import HospitalDoctorsListScreenDent from '../Screens/HospitalDoctorsListScreenDent'
import HospitalDoctorsListScreenOrtho from '../Screens/HospitalDoctorsListScreenOrtho'
import HospitalDoctorsListScreenCardio from '../Screens/HospitalDoctorsListScreenCardio'
import HospitalDoctorsListScreenNeuro from '../Screens/HospitalDoctorsListScreenNeuro'
import HospitalDetails from '../Screens/HospitalDetails-seidman'
import BookAppointment from '../Screens/BookAppointment'


const Stack = createStackNavigator()
export default function Homenavigation() {
  return (
<Stack.Navigator screenOptions={{headerShown:false}}>
    <Stack.Screen name='Home' component={Home}/>
    <Stack.Screen name='hospital-doctor-list-screenDenti' component={HospitalDoctorsListScreenDent}/>
    <Stack.Screen name='hospital-doctor-list-screenCardio' component={HospitalDoctorsListScreenCardio}/>
    <Stack.Screen name='hospital-doctor-list-screenOrtho' component={HospitalDoctorsListScreenOrtho}/>
    <Stack.Screen name='hospital-doctor-list-screenNeuro' component={HospitalDoctorsListScreenNeuro}/>

    {/* All Hosptal Details */}
    <Stack.Screen name='seidman-hospital-detail' component={HospitalDetails}/>
    <Stack.Screen name='marys-hospital-detail' component={HospitalDetails}/>
    <Stack.Screen name='uh-hospital-detail' component={HospitalDetails}/>

    <Stack.Screen name='book-appointment' component={BookAppointment}/>
</Stack.Navigator>
  )
}
