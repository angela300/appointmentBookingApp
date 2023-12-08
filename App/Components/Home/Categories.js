import React from 'react'
import { View, Text, TouchableOpacity  } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Colors from '../../../assets/Shared/Colors';
import SubHeading from './SubHeading';
import { useNavigation} from '@react-navigation/native'
import {HospitalDoctorsListScreenDent} from '../../Screens/HospitalDoctorsListScreenDent'

export default function Categories() {
    const navigation = useNavigation();

    return (
        <View style={{ marginTop: "10" }}>
            <SubHeading subHeadingTitle={'Doctor Speciality'}/>
            <View >
                <View style={{
                    padding: 15,
                    paddingLeft: 0,
                    flexDirection: 'row',  // Set the flexDirection to 'row' for horizontal layout
                    flexWrap: 'wrap',     // Allow icons to wrap to the next line
                    justifyContent: 'space-between',
                    width: '100%'
                }}>
                    <TouchableOpacity onPress={()=>navigation.navigate('hospital-doctor-list-screenDenti')} style={{display: 'flex',
                        flex: 1, justifyContent:'center',alignItems:'center'
                         }}>
                        <View style={{ 
                            height: 40, 
                            width: 40, 
                            backgroundColor: Colors.SECONDARY,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius:99,
                            marginTop:10,
                            marginLeft:10,
                            marginRight:10 }}>
                            <FontAwesome5 name="tooth" size={20} color={Colors.PRIMARY} />
                        </View>
                        <Text style={{fontSize:10}}>Dentist</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>navigation.navigate('hospital-doctor-list-screenCardio')} style={{display: 'flex',
                        flex: 1, justifyContent:'center',alignItems:'center'}}>
                        <View style={{ 
                            height: 40, 
                            width: 40, 
                            backgroundColor: Colors.SECONDARY,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius:99,
                            marginTop:10,
                            marginLeft:10,
                            marginRight:10}}>
                            <FontAwesome name="heartbeat" size={20} color={Colors.PRIMARY} />
                        </View>
                        <Text style={{fontSize:10}}>Cardiologist</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>navigation.navigate('hospital-doctor-list-screenOrtho')} style={{display: 'flex',
                        flex: 1, justifyContent:'center',alignItems:'center'}}>
                        <View style={{ 
                            height: 40, 
                            width: 40, 
                            backgroundColor: Colors.SECONDARY,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius:99,
                            marginTop:10,
                            marginLeft:10,
                            marginRight:10  }}>
                            <FontAwesome5 name="ship" size={20} color={Colors.PRIMARY} />
                        </View>
                        <Text style={{fontSize:10}}>Orthopedic</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>navigation.navigate('hospital-doctor-list-screenNeuro')} style={{display: 'flex',
                        flex: 1, justifyContent:'center',alignItems:'center'}}>
                        <View style={{ 
                            height: 40, 
                            width: 40, 
                            backgroundColor: Colors.SECONDARY,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius:99,
                            marginTop:10,
                            marginLeft:10,
                            marginRight:10  }}>
                            <FontAwesome5 name="brain" size={20} color={Colors.PRIMARY} />
                        </View>
                        <Text style={{fontSize:10}}>Neurologist</Text>
                    </TouchableOpacity>
                    {/* <View style={{ 
                        height: 40, 
                        width: 40, 
                        backgroundColor: Colors.SECONDARY,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius:99,
                        marginTop:10,
                        marginLeft:10,
                        marginRight:10  }}>
                        <MaterialIcons name="hearing" size={24} color={Colors.PRIMARY} />
                    </View> */}
                </View>
            </View>
        </View>
    )
}
