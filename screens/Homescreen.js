import { View, Text, TouchableOpacity, ImageBackground, Image, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ProfileSmallCard from '../components/profileSmallCard'
import Todaybighits from '../components/todaybighits'
import Newrelease from '../components/Newrelease'


const Homescreen = () => {
  return (

    <SafeAreaView className='flex-1 bg-black' >
      <ScrollView className=''>
        <View className="p-4">
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

          {/* profile small card */}
          <View className='flex flex-row  flex-wrap justify-between '>

            <ProfileSmallCard />

          </View>

          
            <Text
              className='text-white font-semibold  text-2xl mt-3 '
            >Today Big Hits
            </Text>
        

          {/* todayhits card */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className='space-y-6'>

            <View
              className=' flex flex-row flex-wrap justify-between'>

              <Todaybighits />

            </View>
          </ScrollView>

          <View className='h-5' />


          <Text
            className='text-white font-semibold  text-2xl'
          >New releases for you
          </Text>


          {/* Newrelease card */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className=''>

            <View
              className=' flex flex-row flex-wrap justify-between '>

              <Newrelease />

            </View>
          </ScrollView>


        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Homescreen