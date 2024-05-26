import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const Songitem = ({item}) => {
  return (
    <Pressable className='fle flex-row items-center p-2'>
      <Image className='h-12 w-12 mr-4' source={{uri: item.image}} />
      {/* <Text>fsfsf </Text> */}

      <View className='flex-1'>
        <Text numberOfLines={1} className='text-lg text-white font-bold'>{item.name}</Text>
        <Text className='text-gray-800'>{item.artist}</Text>
      </View>

      <View className='flex flex-row items-center gap-2 my-1'>
      <AntDesign name="heart" size={24} color="#1DB954" />
      <Entypo name="dots-three-vertical" size={24} color="white" />
      </View>
    
    </Pressable>
  )
}

export default Songitem;