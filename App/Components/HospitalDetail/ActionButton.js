import React from 'react'
import { Text, View, FlatList, TouchableOpacity} from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../../assets/Shared/Colors';
import { MaterialIcons } from '@expo/vector-icons';

export default function ActionButton() {

    const actionButtonList = [
        {
            id: 1,
            name: 'web',
            name1: 'Website'
        },
        {
            id: 2,
            name: "email",
            name1: "Email",
        },
        {
            id: 3,
            name: "phone",
            name1: "Phone",
        },
        {
            id: 4,
            name: "directions-car",
            name1: "Direction",
        },
        {
            id: 5,
            name: "share",
            name1: "Share",
        }
    ]
    return (
        <View style={{ marginTop: 15 }}>
            <FlatList
                data={actionButtonList}
                columnWrapperStyle={{
                    flex:1,
                    justifyContent: 'space-between',
                    width: "100%"
                }}
                numColumns={5}
                showHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <TouchableOpacity>
                        <View style={{
                            backgroundColor: Colors.SECONDARY,
                            width: 40,
                            height:40,
                            borderRadius: 99,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <MaterialIcons name={item.name} size={18} color={Colors.PRIMARY}/>
                        </View>
                        <Text style={{
                            fontFamily: 'appfont-semi',
                            marginTop:5,

                        }}>{item.name1}</Text>
                    </TouchableOpacity>
                )}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    )
}
