import { View, Text, TouchableOpacity, ImageBackground, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ProfileSmallCard from '../components/profileSmallCard'

const Homescreen = () => {
  return (

    <SafeAreaView >
      <View className="bg-black  h-screen p-4">
        <View className='flex flex-row space-x-2'>
          <View>
            <TouchableOpacity className=' my-6 p-2 px-4 rounded-full bg-orange-100 '>
              <Text className=' text-xl text-orange-600 font-lg'>All</Text>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity className='  my-6  p-2 px-2 rounded-full bg-orange-100 '>
              <Text className=' text-xl text-orange-600 font-lg'>Music</Text>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity className=' my-6 p-2 px-2 rounded-full bg-orange-100'>
              <Text className=' text-xl text-orange-600 font-lg'>Podcasts</Text>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity className=' my-6 px-2 p-2 rounded-full bg-orange-100'>
              <Text className=' text-xl text-orange-600 font-lg'>P</Text>
            </TouchableOpacity>
          </View>
        </View>


        <View className='flex flex-row  flex-wrap justify-between '>

          <ProfileSmallCard />

        </View>


      </View>
    </SafeAreaView>
  )
}

export default Homescreen