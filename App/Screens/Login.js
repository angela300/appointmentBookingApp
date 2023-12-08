import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import app from '../../assets/images/app.png';
import Colors from '../../assets/Shared/Colors';
import { TouchableOpacity } from 'react-native-web';
import SignInWithOAuth from '../Components/SignInWithOAuth';

export default function Login() {
  return (
    <View style={{alignItems:'center',
    backgroundColor: Colors.LIGHT_GRAY}}>
      <Image source={app} style={styles.appImage} resizeMode="contain" />
      <View style={{backgroundColor: Colors.white,
      padding: 25,
      borderTopLeftRadius:20,
      borderTopRightRadius:20,
      alignItems: 'center',
      marginTop: -50,
      elevation: 2
    }}>
        <Text style={{ fontSize:28,
          fontWeight: 'bold'}}>Your Ultimate Doctor</Text>
        <Text style={{fontSize:28,
          fontWeight: 'bold'}}>Appointment Booking App</Text>
        <Text style={{textAlign:'center', marginTop:20}}>Book Appointment Effortlessly and 
        manage your health journey</Text>
        <SignInWithOAuth/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -50
  },
  appImage: {
    width: 300,
    height: 200,
    objectFit: 'cover',
    marginTop:50,
    borderRadius: 20,
    borderWidth: 6,
    borderColor: '#000'
  }
});
