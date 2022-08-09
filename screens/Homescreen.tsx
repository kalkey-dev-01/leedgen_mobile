
import { useNavigation } from '@react-navigation/native';
import React, { FC, useLayoutEffect } from 'react'
import { Text, TextInput, View } from 'react-native'
import { HomeIcon as Home, BellIcon as Notifications, SearchCircleIcon as Search } from 'react-native-heroicons/solid'
import { Pressable } from "react-native"
import Animated, { useSharedValue, useAnimatedStyle, withSequence, withTiming, withRepeat } from 'react-native-reanimated';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { RegisterScreen } from './RegisterScreen';

const Tab = createMaterialTopTabNavigator();

const Hscreen = () => {
    const rotation = useSharedValue(0);
    const [names, setName] = React.useState<string>('')
    const navigation = useNavigation();
    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ rotateZ: `${rotation.value}deg` }],
        };
    });
    return (<View className='bg-white'>
        <View className='flex flex-row items-center px-4 my-5 '>
            <Text className='text-2xl flex-1 '>Welcome user </Text>

            <Pressable onPress={() => {
                rotation.value = withSequence(
                    withTiming(-10, { duration: 50 }),
                    withRepeat(withTiming(60, { duration: 150 }), 6, true),
                    withTiming(0, { duration: 50 })
                );
                navigation.navigate('Notifications' as never);

            }}>
                <Animated.View style={animatedStyle}>
                    <Notifications size={25} color='black' />
                </Animated.View>

            </Pressable>


        </View>

        <Text className='text-left mb-4 px-4 text-lg font-semibold'>Enter the name of the company you want to extract info about</Text>
        <View className='flex flex-row justify-center align-middle mx-2'>
            <TextInput className='bg-white border-2 
            flex-1 border-black shadow-lg shadow-gray-500 
            mx-2 mb-3 py-2 text-black px-4 rounded-full'
                value={names}
                onChangeText={(e) => {
                    setName(e)
                }}
            />
            <Search color='black' size={50} onPress={() => console.log(names)} />
        </View>
        <View>
        </View>
    </View>);

}


const Homescreen: FC = () => {
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    });
    return (
        <Tab.Navigator initialRouteName='login'>
            <Tab.Screen name='Register' component={RegisterScreen} />
            <Tab.Screen name='login' component={Hscreen} />
        </Tab.Navigator>
    )

}

export default Homescreen
