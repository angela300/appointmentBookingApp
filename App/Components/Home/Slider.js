import React from 'react'
import {View, Text, FlatList, Image, Dimensions} from 'react-native'

export default function Slider() {
    const sliderList=[
        {
            id: 1,
            name: 'Slider 1',
            imageUrl: 'https://images.pexels.com/photos/247786/pexels-photo-247786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        },
        {
            id: 2,
            name: 'Slider 1',
            imageUrl: 'https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            id: 3,
            name: 'Slider 1',
            imageUrl: 'https://images.pexels.com/photos/127873/pexels-photo-127873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        }
    ]
  return (
    <View style={{marginTop:10}}>
        <FlatList
            data = {sliderList}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item})=>(
                <Image source={{uri:item.imageUrl}}
                style={{
                    width: Dimensions.get('screen').width*0.9,
                    height: 170,
                    borderRadius: 10,
                    margin: 2
                }}/>
            )}
        />
    </View>
  )
}
