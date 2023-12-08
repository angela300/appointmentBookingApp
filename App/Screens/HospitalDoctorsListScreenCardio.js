import {React, useState} from 'react'
import {View, Text, ActivityIndicator, ScrollView} from 'react-native'
import {useRoute} from '@react-navigation/native'
import PageHeaderCardio from '../Components/Shared/PageHeaderCardio'
import HospitalDoctorTab from '../Components/HospitalDoctorsScreen/HospitalDoctorTab'
import HospitalListBigCardio from '../Components/HospitalDoctorsScreen/HospitalListBigCardio'
import Colors from '../../assets/Shared/Colors'
import DoctorListBigCardio from '../Components/HospitalDoctorsScreen/DoctorListBigCardio'

export default function HospitalDoctorsListScreenCardio() {
    
    ///const param = useRoute()
    const [activeTab, setActiveTab] = useState('Hospital')
    return (
    <View>
      <ScrollView
      showsVerticalScrollIndicator={false}>
        <PageHeaderCardio Title={'Cardiologist'}/>
        <HospitalDoctorTab activeTab={(value)=>setActiveTab(value)}/>
        {/* <ActivityIndicator size={'large'} color={Colors.PRIMARY}/> */}

        {
            activeTab=='Hospital'?
            <HospitalListBigCardio/>
            :<DoctorListBigCardio/>
        }
        </ScrollView>
    </View>
  )
}
