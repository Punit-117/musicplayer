import { View, Text, ScrollView, Pressable, TextInput, FlatList, Image } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
// import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Songitem from '../components/Songitem';
import { Player } from '../PlayerContext';
import { BottomModal, ModalContent } from 'react-native-modals';
import { Audio } from 'expo-av';


const Likedsongs = () => {

    const navigation = useNavigation();
    const [input, setinput] = useState("");
    const [modalvisible, setmodalvisible] = useState(false);
    const { currenttrack, setcurrenttrack } = useContext(Player);
    const [currentsound, setcurrentsound] = useState(null);
    const [savedTrack, setsavedTrack] = useState([]);

    const getmusic = async () => {

        const url = 'https://spotify174.p.rapidapi.com/?trek=Ko%27zmunchog%27im&limit=10&count_code=UZ&offset=10';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '93d01e2531msh7b7dc165e66a906p137f83jsnb765e24e3370',
                'X-RapidAPI-Host': 'spotify174.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            setsavedTrack(result.result);
            console.log(result);
            // console.log(response)

        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getmusic();
    }, [])

    console.log(savedTrack)

    const playTrack = async () => {

        if (savedTrack.length > 0) {
            setcurrenttrack(savedTrack[0])
        }
        await play(savedTrack[0])
    }

    console.log(savedTrack[0]);
    console.log(currenttrack);

    const play = async (nexttrack) => {

        const preview_url = currenttrack.link;
        try {

            await Audio.setAudioModeAsync(
                {
                    playsInSilentModeIOS: true,
                    staysActiveInBackground: false,
                    shouldDuckAndroid: false
                }
            )
            const { sound, status } = await Audio.Sound.createAsync({
                uri: 'https://p.scdn.co/mp3-preview/1d53b96abb564f9ba08427c3c5361dd8fbe72f7d?cid=d8a5ed958d274c2e8ee717e6a4b0971d'
            },
                {
                    shouldPlay: true, isLooping: false
                }
            )
            setcurrentsound(sound);
            await sound.playAsync();
        } catch (error) {
            console.error(error)
        }
    }
    return (

        <>
            <View className='flex-1 bg-purple-500' >
                <ScrollView className='flex-1 mt-8'>
                    <Pressable onPress={() => navigation.goBack()} className='mx-2'>
                        <Ionicons name="arrow-back" size={24} color="white" />
                    </Pressable>

                    <Pressable className='mx-4 flex flex-row justify-between items-center mt-3'>
                        <Pressable className='flex flex-row items-center gap-1 h-10 bg-gray-700 flex-1 rounded-lg '>
                            <AntDesign name="search1" size={20} color="white" />
                            <TextInput value={input} onChangeText={(text) => setinput(text)} placeholder='Find liked songs'
                                placeholderTextColor={"white"} />
                        </Pressable>

                        <Pressable className='mx-2 h-10 rounded-lg bg-gray-700  p-3 '>
                            <Text className='text-white'>Sort</Text>
                        </Pressable>

                    </Pressable>

                    <View className='h-12' />

                    <View className='mx-3'>
                        <Text className='text-white text-lg font-bold'>Liked Songs</Text>
                        <Text className='text-white mt-1'>430 songs</Text>
                    </View>

                    <Pressable className='flex flex-row justify-between items-center mx-3'>
                        <Pressable className='h-8 w-8 rounded-full bg-green-500 justify-center items-center'>
                            <AntDesign name="arrowdown" size={24} color="white" />
                        </Pressable>

                        <View className='flex flex-row items-center gap-3'>
                            <MaterialCommunityIcons name="cross-bolnisi" size={24} color="#1DB954" />
                            <Pressable onPress={playTrack} className='h-12 w-12 rounded-full bg-green-500 justify-center items-center'>
                                <Entypo name="controller-play" size={24} color="white" />
                            </Pressable>
                        </View>
                    </Pressable>



                    <FlatList nestedScrollEnabled={true} showsVerticalScrollIndicator={false} horizontal={false} data={savedTrack} renderItem={({ item }) => {
                        return <Songitem item={item} />
                    }} />


                </ScrollView>


            </View>

            {currenttrack && (

                <Pressable onPress={() => setmodalvisible(!modalvisible)} className='flex flex-row items-center justify-between bg-sky-500 p-2 ml-auto mr-auto w-11/12 mb-1 absolute rounded-lg left-5 bottom-0.5  gap-'>
                    <View className='flex flex-row items-center gap-1'>

                        <Image className='h-12 w-12' source={{ uri: currenttrack.image }} />
                        <Text numberOfLines={1} className='font-bold text-white text-lg w-60'>{currenttrack.name} :{" "}{currenttrack.artist} </Text>
                    </View>

                    <View className='flex flex-row items-center gap-2'>
                        <AntDesign name="heart" size={24} color="#1DB954" />
                        <Pressable>
                            <AntDesign name="pausecircle" size={24} color="white" />
                        </Pressable>
                    </View>
                </Pressable>
            )}

            <BottomModal visible={modalvisible} onHardwareBackPress={() => setmodalvisible(false)}
                swipeDirection={["up", "down"]}
                swipeThreshold={200}
            >
                <ModalContent className='h-full w-full bg-sky-500'>
                    <View className='h-full w-full mt-4'>
                        <Pressable className='flex flex-row items-center justify-between'>
                            <AntDesign onPress={() => setmodalvisible(!modalvisible)} name="down" size={24} color="white" />
                            {currenttrack && (
                                <>
                                    <Text className='text-white font-bold text-lg'>{currenttrack.name}</Text>
                                    <Entypo name="dots-three-vertical" size={24} color="white" />
                                </>
                            )}
                        </Pressable>

                        <View className='h-8' />
                        <View className='p-2'>
                            {currenttrack && (
                                <>
                                    <Image className='h-3/5 w-full rounded-lg' source={{ uri: currenttrack.image }} />
                                    <View className='mt-2 flex flex-row items-center justify-between'>
                                        <View>
                                            <Text className='text-white font-bold text-xl'>{currenttrack.name}</Text>
                                            <Text className='text-white mt-0.5 '>{currenttrack.artist}</Text>
                                        </View>
                                        <AntDesign name="heart" size={24} color="#1DB954" />
                                    </View>
                                    <View className='mt-2'>
                                        <Text>progress bar</Text>
                                        <View className='mt-2 flex flex-row items-center justify-between'>
                                            <Text className='text-white font-bold'>0:00</Text>
                                            <Text className='text-white font-bold'>0:30</Text>
                                        </View>
                                    </View>
                                    <View className='flex flex-row items-center justify-between mt-3'>
                                        <Pressable>
                                            <FontAwesome name="arrows" size={30} color="#1DB954" />
                                        </Pressable>
                                        <Pressable>
                                            <Ionicons name="play-skip-back" size={30} color="white" />
                                        </Pressable>
                                        <Pressable>
                                            <AntDesign name="pausecircle" size={60} color="white" />
                                        </Pressable>
                                        <Pressable>
                                            <Ionicons name="play-skip-forward" size={30} color="white" />
                                        </Pressable>
                                        <Pressable>
                                            <Feather name="repeat" size={30} color="#1DB954" />
                                        </Pressable>
                                    </View>
                                </>
                            )}
                        </View>

                    </View>
                </ModalContent>
            </BottomModal>
        </>
    );
}
export default Likedsongs;