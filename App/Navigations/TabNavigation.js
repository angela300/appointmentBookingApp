import React from 'react'
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../Screens/Home'
import Appointment from '../Screens/Appointment'
import Profile from '../Screens/Profile'
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import Homenavigation from './Homenavigation'
import Explore from '../Screens/Explore'
import { MaterialIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator()
export default function TabNavigation() {
    return (
        <View style={{ flex: 1, width: "100%" }}>
            <Tab.Navigator screenOptions={{
                headerShown: false
            }}
                tabBarOptions={{
                    tabBarStyle: { width: '50%' }, // Set the width to 100% to fill the screen
                }}
            >
                <Tab.Screen name='Home' component={Homenavigation}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="ios-home" size={size} color={color} />
                        )
                    }}
                />
                <Tab.Screen name='Explore' component={Explore}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="search" size={24} color="black" />
                        )
                    }} />
                <Tab.Screen name='Appointment' component={Appointment}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="calendar" size={size} color={color} />
                        )
                    }} />
                <Tab.Screen name='Profile' component={Profile}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <FontAwesome name="user-circle" size={size} color={color} />
                        )
                    }} />
            </Tab.Navigator>
        </View>

    )
}


