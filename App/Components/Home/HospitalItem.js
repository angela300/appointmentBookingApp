import React from 'react'
import { View, Text, Image, FlatList, Dimensions } from 'react-native'
import Colors from '../../../assets/Shared/Colors'

export default function HospitalItem() {
    const hospitalList = [
        {
            id: 1,
            name: 'Seidman Cancer Center',
            imageUrl: 'https://images.pexels.com/photos/668298/pexels-photo-668298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            Address: '11100 Euclid Ave, Cleveland, OH 44106, USA'
        },
        {
            id: 2,
            name: "St. Mary's Hospital",
            imageUrl: 'https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            Address: '1601 W St Marys Rd, Tucson, AZ 85745, United States'
        },
        {
            id: 3,
            name: 'UH University Hospitals',
            imageUrl: 'https://images.pexels.com/photos/668300/pexels-photo-668300.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            Address: 'UH Medical Center 11100 Euclid Ave. Cleveland, OH 44106216-844-8447'
        }
    ]
    return (
        <View>
            <FlatList
                data={hospitalList}
                horizontal = {true}
                showHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <View style={{width: 200,
                    borderWidth: 1,
                    borderColor: Colors.LIGHT_GRAY,
                    borderRadius: 10,
                    // borderBottomLeftRadius:0,
                    // borderBottomRightRadius:0,
                    marginTop:5,

                    marginRight:10, 
                    marginBottom:20}}>
                        <Image
                            source={{ uri: item.imageUrl }}
                            style={{
                                width:"100%",
                                height: 110,
                                borderTopLeftRadius: 10,
                                borderTopRightRadius: 10
                            }}
                        />
                        <Text style={{ textAlign: 'center', marginTop: 5, fontFamily: 'appfont-semi', fontSize: 16 }}>
                            {item.name}
                        </Text>
                        <Text style={{ textAlign: 'center', marginTop: 5, color: 'gray' }}>{item.Address}</Text>
                    </View>
                )}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    )
}
