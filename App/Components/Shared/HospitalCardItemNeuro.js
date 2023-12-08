import {React, useState} from 'react'
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../../assets/Shared/Colors';
import {View, Text, TouchableOpacity, FlatList, Image} from 'react-native'
import { useNavigation} from '@react-navigation/native'

export default function HospitalCardItemNeuro() {
    const hospitalList = [
        {
            id: 1,
            name: 'UH University Hospitals',
            imageUrl: 'https://images.pexels.com/photos/668300/pexels-photo-668300.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            Address: 'UH Medical Center 11100 Euclid Ave. Cleveland, OH 44106216-844-8447',
            Categories: 'Neurologist, Orthopedic',
            viewCount: 420
        }
    ]

    const navigation = useNavigation()
    return (
        <View style={{marginTop:10, paddingLeft:10, paddingRight:10}}>
            <FlatList
                data={hospitalList}
                showHorizontalScrollIndicator={false}
                renderItem={({ item }) => (

                    <View style={{
                        marginBottom: 10
                    }}>
                    <TouchableOpacity onPress={()=>navigation.navigate('marys-hospital-detail')}>
                        <Image
                            source={{ uri: item.imageUrl }}
                            style={{
                                width: "100%",
                                height: 140,
                                borderTopLeftRadius: 10,
                                borderTopRightRadius: 10
                            }}
                        />
                        </TouchableOpacity>
                        <View style={{
                            backgroundColor: Colors.white,
                            borderBottomLeftRadius:10,
                            borderBottomRightRadius:10, paddingLeft:5, paddingRight:5, paddingBottom:10}}>
                            <Text style={{ textAlign: 'center', marginTop: 5, fontFamily: 'appfont-semi', fontSize: 18 }}>
                                {item.name}
                            </Text>
                            <Text style={{ textAlign: 'center', marginTop: 5, color: 'gray' }}>{item.Categories}</Text>
                            <View style={{ borderBottomWidth: 1, borderColor: Colors.LIGHT_GRAY, margin: 5, marginBottom: 10 }}></View>
                            <View style={{
                                display: 'flex', flexDirection: 'row', gap: 5,
                                alignItems: 'center'
                            }}>
                                <Ionicons name="location" size={18} color={Colors.PRIMARY} />
                                <Text style={{ textAlign: 'center', marginTop: 5, color: 'gray',flex: 1, flexWrap: 'wrap'  }}>{item.Address}</Text>
                            </View>
                            <View style={{
                                display: 'flex', flexDirection: 'row', gap: 5,
                                alignItems: 'center', marginnTop: 4
                            }}>
                                <Ionicons name="eye" size={18} color="black" />
                                <Text style={{ textAlign: 'center', marginTop: 5, color: 'gray' }}>{item.viewCount}</Text>
                            </View>
                        </View>
                    </View>
                )}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    )
}
