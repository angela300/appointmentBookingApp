import {React, useState} from 'react'
import { View, Text, ScrollView } from 'react-native'
import HospitalDoctorTab from '../Components/HospitalDoctorsScreen/HospitalDoctorTab'
import HospitalCardItemAll from '../Components/Shared/HospitalCardItemAll'
import DoctorListBig from '../Components/HospitalDoctorsScreen/DoctorListBig'

export default function Explore() {
    const [activeTab, setActiveTab] = useState('Hospital')
    return (
        <ScrollView style={{ padding: 0 }}
        showsVerticalScrollIndicator={false}>
            <Text style={{
                fontSize: 26,
                fontFamily: 'appfont-semi',
                marginTop:20,
                marginLeft:20
            }}>
                Explore
            </Text>
            <HospitalDoctorTab activeTab={(value) => setActiveTab(value)} />

            {
                activeTab=='Hospital'?
                <HospitalCardItemAll/>
                :<DoctorListBig/>
            }
        </ScrollView>
    )
}
