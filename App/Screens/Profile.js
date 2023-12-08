import React from 'react';
import { Text, View, Button, TouchableOpacity } from 'react-native';
import Header from '../Components/Home/Header';
import { useAuth, useUser } from '@clerk/clerk-expo';
import Colors from '../../assets/Shared/Colors';
import SubHeading from '../Components/Home/SubHeading';

export default function Profile() {
  const { isLoaded, signOut } = useAuth();
  const { user } = useUser();


  return (
    <View style={{ flex: 1, justifyContent: 'space-between', padding: 20, paddingBottom:15 }}>
      <View>
        <SubHeading subHeadingTitle={'Your Profile Page, '} seeAll={false}/>
        <Text style={{
          fontSize: 18,
          fontFamily: 'appfont',
        }}>{user.fullName}</Text>
      </View>
      <View>
        <TouchableOpacity
          style={{ backgroundColor: Colors.RED, padding: 10 }}
          onPress={() => signOut()}
        >
          <Text style={{ color: 'white', textAlign: 'center', fontFamily: 'appfont-semi', fontSize:16 }}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
