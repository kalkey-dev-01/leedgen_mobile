import { Text, View, Pressable, TextInput, ViewProps, TextProps } from 'react-native'
import React from 'react'
import { CubeIcon as Cube, GlobeIcon as Globe } from 'react-native-heroicons/outline'
import Animated, { useSharedValue, useAnimatedStyle, withSequence, withTiming, withRepeat } from 'react-native-reanimated';
import axios, { AxiosResponse } from 'axios';


interface FnLnDProps {

}
// https://app.leadwity.com/api-product/incoming-webhook/find-emails-first-last

export const FnLnD: React.FC<FnLnDProps> = ({ }) => {
    const [first_name, setFirstName] = React.useState<string>('')
    const [last_Name, setLastName] = React.useState<string>('')
    const [domain, setDomain] = React.useState<string>('')
    const [data, setData] = React.useState<AxiosResponse | undefined>();
    const r = useSharedValue<number>(0);
    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ rotateZ: `${r.value}deg` }],
        };
    });
    return (
        <View className='bg-white h-full'>
            <View className='bg-black flex flex-row px-2 items-center align-middle py-3 '>

                {/* Navbar  */}
                <Text className='text-xl text-white flex-1 font-semibold'>
                    First & Last name and Domain
                </Text>
                <Pressable
                    onPress={() => {
                        r.value = withSequence(
                            withTiming(-360, { duration: 1000 }),

                            withTiming(0, { duration: 1000 })
                        );
                    }}>
                    <Animated.View style={animatedStyle}>
                        <Globe size={50} color={'white'} />
                    </Animated.View>
                </Pressable>
            </View>
            {/* Input Tags and Button */}
            <View className='my-2'>
                <View className='flex flex-row items-center my-2 align-middle'>
                    <Text className='text-base font-bold px-2 '>First Name</Text>
                    <TextInput placeholder='Joe' autoCorrect={false} value={first_name} onChangeText={(e) => {
                        setFirstName(e)
                    }} className='px-3 font-semibold  bg-white rounded-3xl borsder-black border-2 flex-1 mx-2' />
                </View>
                <View className='flex flex-row items-center my-2 align-middle'>
                    <Text className='text-base font-bold px-2 '>Last Name</Text>
                    <TextInput placeholder='Smith' autoCorrect={false} value={last_Name} onChangeText={(e) => {
                        setLastName(e)
                    }} className='px-3 font-semibold  bg-white rounded-3xl border-black border-2 flex-1 mx-2' />
                </View>
                <View className='flex flex-row items-center my-2 align-middle'>
                    <Text className='text-base font-bold px-2 '>Domain</Text>
                    <TextInput placeholder='domain.com' autoCorrect={false} value={domain} onChangeText={(e) => {
                        setDomain(e)
                    }} className='px-3 font-semibold  bg-white rounded-3xl border-black border-2 flex-1 mx-2' />
                </View>
                {/* Search Bar */}
                <View className='mt-2'>
                    <Pressable
                        onPress={async () => {
                            r.value = withSequence(
                                withTiming(-360, { duration: 1000 }),

                                withTiming(0, { duration: 1000 })
                            );
                            await axios.post('https://app.leadwity.com/api-product/incoming-webhook/find-emails-first-last', {
                                "api_key": "M1W1N9B0-N0Q9J1U4-O7A8E2H1-H6I3M1Q9",
                                "first_name": first_name,

                                "last_name": last_Name,
                                "domain": domain,
                            }).then((res) => {
                                setData(res.data['email'])
                                return data
                            }).catch((err) => {
                                console.log(err)
                            }).finally(() =>
                                console.log(data)
                            )
                        }}>
                        <Text className='bg-black text-xl text-white py-2 text-center  px-3'>Search</Text>
                    </Pressable>
                </View>
                <View>
                    {data !== undefined ? <View className='pt-10 flex flex-col gap-10 px-5'>
                        <Text className='text-2xl text-black text-center'>The Email found is </Text>
                        <Text className='text-black text-2xl text-center font-semibold'>{data}</Text>
                        <Text className='text-black font-bold text-xl text-center'>This might be a business or a company provided Email</Text>
                    </View> : <Text className='text-black mx-5 my-10 text-lg text-center'>Hint - Search Another Keyword if the user has not extended his/her email. </Text>}
                </View>
            </View>
            {/* User Interface */}

        </View>
    );
}