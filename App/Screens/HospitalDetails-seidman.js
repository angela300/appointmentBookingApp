import React, { useEffect } from 'react'
import { View, Text, TouchableOpacity, FlatList, Image, ScrollView } from 'react-native'
import { useRoute } from '@react-navigation/native'
import PageHeaderCardio from '../Components/Shared/PageHeaderCardio'
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../assets/Shared/Colors';
import HospitalInfo from '../Components/HospitalDetail/HospitalInfo';
import { useNavigation} from '@react-navigation/native'

export default function HospitalDetails() {
    // const [hospital, setHospital]= useState()
    // const param = useRoute().HospitalDetails
    const hospitalList = [
        {
            id: 1,
            name: 'Seidman Cancer Center',
            imageUrl: 'https://images.pexels.com/photos/668298/pexels-photo-668298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            Address: '11100 Euclid Ave, Cleveland, OH 44106, USA',
            Categories: 'Dentist, Neurologist, Orthopedic',
            viewCount: 300
        },
        {
            id: 2,
            name: "St. Mary's Hospital",
            imageUrl: 'https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            Address: '1601 W St Marys Rd, Tucson, AZ 85745, United States',
            Categories: 'Cardiologist, Dentist,  Orthopedic',
            viewCount: 266
        },
        {
            id: 3,
            name: 'UH University Hospitals',
            imageUrl: 'https://images.pexels.com/photos/668300/pexels-photo-668300.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            Address: 'UH Medical Center 11100 Euclid Ave. Cleveland, OH 44106216-844-8447',
            Categories: 'Neurologist, Orthopedic',
            viewCount: 420
        }
    ]

    const navigation = useNavigation()
    return (
        <View>
        <ScrollView style={{backgroundColor: Colors.white}}
        showsVerticalScrollIndicator={false}>
            <View style={{
                position: 'absolute', zIndex: 10,
                margin: 15
            }}>
                <Ionicons name="arrow-back-circle-outline" size={37} color="black" onPress = {()=>navigation.goBack()}/>
            </View>
            <Image
                source={{ uri: hospitalList[0].imageUrl }}
                style={{
                    width: "100%",
                    height: 260,

                }}
            />
            <View style={{
                marginTop: -20,
                backgroundColor: Colors.white,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                padding: 20
            }}>
                <HospitalInfo />
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate('book-appointment')} style={{
            padding: 10,
            backgroundColor: Colors.PRIMARY,
            margin: 10,
            borderRadius: 99,
            left: 0,
            right:0,
            marginBottom: 10,
            zIndex: 20,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Text style={{
                textlign: 'center',
                fontFamily: 'appfont-semi',
                fontSize: 17
            }}>Book appointment</Text>
        </TouchableOpacity>
        </ScrollView>

        </View>
    )
}
