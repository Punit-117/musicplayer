import { View, Text, Image } from 'react-native'
import React from 'react'
import { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

export default function Splash() {
  
    const navigation = useNavigation();
    
        useEffect(() => {
          // Simulate some loading time, e.g., fetching data or performing initialization
          setTimeout(() => {
            // Navigate to the main screen or any other screen after the splash screen
            navigation.replace('Home'); // Replace 'MainScreen' with the actual screen name
          }, 2000); // Adjust the time as needed
        }, [navigation]);
      
  return (
    <SafeAreaView>

    <View className='flex justify-center items-center bg-black h-screen'>
      <Text className='text-orange-300 text-lg'>Splash</Text>
      <Image source={require('../assets/spotify.jpg')} className='w-11/12 h-1/2 '/>
    </View>
    </SafeAreaView>
  )
}