import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Newrelease = () => {


    const data = [
        {
            id: 1,
            name: "punjabi",
            singers: "shubh, karan Aujla, AP Dhillo, sia",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUYZbnX22q3edrjJYdL_tgbk3yPIbuRcnRLQ&usqp=CAU"
        },
        {
            id: 2,
            name: "Hindi",
            singers: "shubh, karan Aujla, AP Dhillo, sia",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUYZbnX22q3edrjJYdL_tgbk3yPIbuRcnRLQ&usqp=CAU"
        },
        {
            id: 3,
            name: "Hindi",
            singers: "shubh, karan Aujla, AP Dhillo, sia",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUYZbnX22q3edrjJYdL_tgbk3yPIbuRcnRLQ&usqp=CAU"
        },
        {
            id: 4,
            name: "Hindi",
            singers: "shubh, karan Aujla, AP Dhillo, sia",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUYZbnX22q3edrjJYdL_tgbk3yPIbuRcnRLQ&usqp=CAU"
        },

    ];
    return (
        <>
            {/* <View> */}
            {/* <Text className='text-white font-semibold  text-sm mt-1'>todaybighits</Text> */}

            {data.map((items) => (

                <TouchableOpacity className='flex rounded-lg m-2 ' key={items.id}>
                    <Image
                        className='w-28 h-28'
                        source={{ uri: items.img }}
                    />

                    <View className='w-28 h-auto'>
                        {/* <Text numberOfLines={2} className='text-white font-semibold  text-sm mt-1 mb'>{items.name}</Text> */}
                        <Text numberOfLines={2} className='text-white font-semibold  text-sm '>{items.singers}</Text>
                        
                    </View>
                </TouchableOpacity>

            ))}

            {/* </View> */}
        </>
    )
}

export default Newrelease;