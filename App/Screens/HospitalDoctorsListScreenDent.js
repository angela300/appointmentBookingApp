import {React, useState} from 'react'
import {View, Text, ActivityIndicator, ScrollView} from 'react-native'
import {useRoute} from '@react-navigation/native'
import PageHeaderDent from '../Components/Shared/PageHeaderDent'
import HospitalDoctorTab from '../Components/HospitalDoctorsScreen/HospitalDoctorTab'
import HospitalListBigDent from '../Components/HospitalDoctorsScreen/HospitalListBigDent'
import Colors from '../../assets/Shared/Colors'
import DoctorListBigDent from '../Components/HospitalDoctorsScreen/DoctorListBigDent'

export default function HospitalDoctorsListScreenDent() {
    
    ///const pram = useRoute().
    const [activeTab, setActiveTab] = useState('Hospital')
    return (
    <View>
      <ScrollView
      showsVerticalScrollIndicator={false}>
        <PageHeaderDent Title={'Dentist'}/>
        <HospitalDoctorTab activeTab={(value)=>setActiveTab(value)}/>
        {/* <ActivityIndicator size={'large'} color={Colors.PRIMARY}/> */}

        {
            activeTab=='Hospital'?
            <HospitalListBigDent/>
            :<DoctorListBigDent/>
        }
        </ScrollView>
    </View>
  )
}
