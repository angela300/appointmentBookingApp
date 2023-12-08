import { View, Text, Button, ScrollView } from 'react-native'
import React from 'react'
import { useAuth } from '@clerk/clerk-expo';
import Header from '../Components/Home/Header';
import SearchBar from '../Components/Home/SearchBar';
import Slider from '../Components/Home/Slider';
import Categories from '../Components/Home/Categories';
import PremiumHospital from '../Components/Home/PremiumHospital';
import Colors from '../../assets/Shared/Colors';
import PageHeaderCardio from '../Components/Shared/PageHeaderCardio';

export default function Home() {
const { isLoaded,signOut } = useAuth();
  return (
    <View>
    <ScrollView style={{padding:20, 
        marginTop:25
        }}
        showsVerticalScrollIndicator={false}
        >
        <Header />
        <SearchBar setSearchText = {(value)=>console.log(value)}/>
        <Slider/>
        <Categories/>
        <PremiumHospital/>
        {/* <Button title="SignOut" onPress={() => signOut()} /> */}
    </ScrollView>
    </View>
  )
}
