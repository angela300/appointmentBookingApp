import {React, useState} from 'react'
import {View, Text, ActivityIndicator, ScrollView} from 'react-native'
import PageHeaderOrtho from '../Components/Shared/PageHeaderOrtho'
import HospitalDoctorTab from '../Components/HospitalDoctorsScreen/HospitalDoctorTab'
import HospitalListBigOrtho from '../Components/HospitalDoctorsScreen/HospitalListBigOrtho'
import Colors from '../../assets/Shared/Colors'
import DoctorListBigOrtho from '../Components/HospitalDoctorsScreen/DoctorListBigOrtho'

export default function HospitalDoctorsListScreenOrtho() {
    
  const [activeTab, setActiveTab] = useState('Hospital')
    return (
    <View>
      <ScrollView
      showsVerticalScrollIndicator={false}>
        <PageHeaderOrtho Title={'Orthopedic'}/>
        <HospitalDoctorTab activeTab={(value)=>setActiveTab(value)}/>
        {/* <ActivityIndicator size={'large'} color={Colors.PRIMARY}/> */}

        {
            activeTab=='Hospital'?
            <HospitalListBigOrtho/>
            :<DoctorListBigOrtho/>
        }
        </ScrollView>
    </View>
  )
}
