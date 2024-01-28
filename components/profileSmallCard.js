import { View, Text, Image } from 'react-native'
import React from 'react'

const ProfileSmallCard = () => {

    const data = [
        {
            id: 1,
            name: "Karan",
            subheading: "Composer",
            img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fvectors%2Fheart-love-red-valentine-romantic-157895%2F&psig=AOvVaw3UGeAZuAS11iYzhzVP25E3&ust=1706513338941000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCMCJ5pnI_4MDFQAAAAAdAAAAABAI"
        },
        {
            id: 2,
            name: "Alex",
            subheading: "Guitarist",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUYZbnX22q3edrjJYdL_tgbk3yPIbuRcnRLQ&usqp=CAU"
        },
        {
            id: 3,
            name: "Emily",
            subheading: "Singer",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDq2ZMPrAGieZsUp1yTm82xNsIGQBr2ICdGB8LSmhIBIh-8ofPhW2yXWHjzl9vLCXQZ9A&usqp=CAU"
        },
        {
            id: 4,
            name: "David",
            subheading: "Drummer"
        },
        {
            id:5,
            name: "Sophie",
            subheading: "Bassist"
        }
        // Add more entries as needed
    ];

    // You can use the 'data' array in your music project


    return (

        <>
     


            {data.map((items) => (
                <View className='flex flex-row bg-gray-800 rounded-lg m-2' key={items.id}>


                    <Image
                        className='w-12 h-12 '
                        source={{uri:items.img}}


                    />
                    <View className='px-4' key={items.name} >
                        <Text className='text-white font-semibold  text-sm mt-1'>{items.name}</Text>
                        <Text className='text-white font-semibold '>{items.subheading}</Text>

                    </View>
                </View>

            ))}
   </>

          

    )
}

export default ProfileSmallCard;