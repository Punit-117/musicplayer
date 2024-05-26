import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

const Login = () => {

    const [name, setname] = useState('');
    const [password, setpassword] = useState('');
    const [passwordIsvisibal, setpasswordIsvisibal] = useState(Boolean);
    return (
        <View className='flex-1 bg-slate-300'>

            <SafeAreaView className='felx justify-center '>


                <View className='items-center mt-10 '>
                    <Text className='text-2xl text-orange-600 '>Login</Text>
                </View>

                <View className='static flex justify-center items-center gap-8 my-8'>
                    <TextInput className='border-solid border-2 p-2  h-11 w-4/5' placeholder="Username" onChange={(e) => setname(e.target.value)} value={name} />
                    <TextInput className='  border-solid border-2 p-2 h-11 w-4/5' placeholder="Password" onChange={(e) => setpassword(e.target.value)} secureTextEntry={passwordIsvisibal} value={password} />

                    <TouchableOpacity className='absolute right-10 bottom-3 ' onPress={()=>setpasswordIsvisibal(!passwordIsvisibal)} >

                        <Image className='h-5 w-5 ' source={require('../assets/hide.png')} />
                    </TouchableOpacity>
                </View>



                <View className='justify-center items-center'>  

                    <TouchableOpacity className='flex justify-center items-center  bg-orange-400  h-10 w-4/5'>
                        <Text className=' text-xl font-bold text-orange-600 font-lg'>Login</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </View>
    )
}

export default Login;