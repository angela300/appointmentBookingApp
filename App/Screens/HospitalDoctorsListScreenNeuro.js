import {React, useState} from 'react'
import {View, Text, ActivityIndicator, ScrollView} from 'react-native'
import {useRoute} from '@react-navigation/native'
import PageHeaderNeuro from '../Components/Shared/PageHeaderNeuro'
import HospitalDoctorTab from '../Components/HospitalDoctorsScreen/HospitalDoctorTab'
import HospitalListBigNeuro from '../Components/HospitalDoctorsScreen/HospitalListBigNeuro'
import Colors from '../../assets/Shared/Colors'
import DoctorListBigNeuro from '../Components/HospitalDoctorsScreen/DoctorListBigNeuro'

export default function HospitalDoctorsListScreenNeuro() {
    
  const [activeTab, setActiveTab] = useState('Hospital')
    return (
    <View>
      <ScrollView
      showsVerticalScrollIndicator={false}>
        <PageHeaderNeuro Title={'Neurologist'}/>
        <HospitalDoctorTab activeTab={(value)=>setActiveTab(value)}/>
        {/* <ActivityIndicator size={'large'} color={Colors.PRIMARY}/> */}

        {
            activeTab=='Hospital'?
            <HospitalListBigNeuro/>
            :<DoctorListBigNeuro/>
        }
      </ScrollView>
    </View>
  )
}
