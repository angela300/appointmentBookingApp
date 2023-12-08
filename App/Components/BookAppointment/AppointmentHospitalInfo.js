import React from 'react'
import { View, Text, Image } from 'react-native'
import PageHeaderCardio from '../Shared/PageHeaderCardio'
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../../assets/Shared/Colors';
import HorizontalLine from '../Shared/HorizontalLine';

export default function AppointmentHospitalInfo() {
    const hospitalList = [
        {
            id: 1,
            name: "UH University Hospital",
            imageUrl: 'https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            Address: '1601 W St Marys Rd, Tucson, AZ 85745, United States',
            Categories: 'Cardiologist, Dentist',
            viewCount: 300,
            about: 'UH University Hospital: A leading hub for cutting-edge healthcare, seamlessly blending academic excellence and compassionate services. With state-of-the-art facilities, a dedicated medical team, and a commitment to advancing research, it provides specialized surgeries and comprehensive wellness programs, ensuring high-quality patient care.'

        }
    ]
    const item = hospitalList[0]
    return (
        <View>
            {/* <PageHeaderCardio Title={'Book Appointment'}/> */}
            <View style={{
                display:'flex',
                flexDirection: 'row', 
                alignItems: 'center',
                gap:15,
                marginTop:20 }}>
                <Image
                    source={{ uri: item.imageUrl }}
                    style={{ width: 60, height: 60, borderRadius: 99 }}
                />
            <View>
                <Text style={{fontSize:20,
                fontFamily: 'appfont-semi',
                marginBottom:2}}>{item.name}</Text>
                <View style={{
                    display: 'flex', flexDirection: 'row', gap: 5,
                    alignItems: 'center'
                }}>
                    <Ionicons name="location" size={18} color={Colors.PRIMARY} />
                    <Text style={{ fontSize: 13, fontFamily: 'appfont', textAlign: 'center', marginTop: 5, color: Colors.GRAY, width: '70%'}}>{item.Address}</Text>
                </View>
            </View>
            </View>
            <HorizontalLine/>
        </View>

    )
}
