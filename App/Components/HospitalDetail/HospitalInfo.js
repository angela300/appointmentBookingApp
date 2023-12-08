import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Colors from '../../../assets/Shared/Colors'
import { Ionicons } from '@expo/vector-icons';
import ActionButton from './ActionButton';
import HorizontalLine from '../Shared/HorizontalLine';

export default function HospitalInfo() {
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
            <View style={{
                backgroundColor: Colors.white,
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10, paddingLeft: 5, paddingRight: 5
            }}>
                <Text style={{ textAlign: 'center', marginTop: 5, fontFamily: 'appfont-semi', fontSize: 18 }}>
                    {item.name}
                </Text>
                <Text style={{ textAlign: 'center', marginTop: 5, color: 'gray' }}>{item.Categories}</Text>
                <View style={{ borderBottomWidth: 1, borderColor: Colors.LIGHT_GRAY, margin: 5, marginBottom: 10, marginTop:10 }}></View>
                <View style={{
                    display: 'flex', flexDirection: 'row', gap: 5,
                    alignItems: 'center'
                }}>
                    <Ionicons name="location" size={18} color={Colors.PRIMARY} />
                    <Text style={{ fontSize: 13, fontFamily: 'appfont', textAlign: 'center', marginTop: 5, color: Colors.GRAY }}>{item.Address}</Text>
                </View>

                <HorizontalLine/>

                <View style={{
                    display: 'flex', flexDirection: 'row', gap: 5,
                    alignItems: 'center', marginTop: 6
                    }}>
                    <Ionicons name="time" size={18} color={Colors.PRIMARY} />
                    <Text style={{ fontSize: 13, fontFamily: 'appfont', textAlign: 'center', marginTop: 5, color: Colors.GRAY }}>Mon Sun | 11AM - 8 PM </Text>
                </View>
                <ActionButton/>
                <View style={{ borderBottomWidth: 1, marginTop: 15, borderColor: Colors.LIGHT_GRAY, margin: 5, marginBottom: 10, marginTop:10 }}></View>
                {/* <SubHeading subHeadingTitle={'About'}/> */}
                <Text style={{
                    fontFamily: 'appfont-semi', fontSize: 16
                }}>About</Text>
                <Text style={{color:'gray', fontFamily: 'appfont'}}>{item.about}</Text>
            </View>

        </View>
    )
}
