
import { useNavigation } from '@react-navigation/native';
import React, { FC, useLayoutEffect } from 'react'
import { Button, Text, View } from 'react-native'
import { HomeIcon as Home } from 'react-native-heroicons/solid'
import { Pressable } from "react-native"
import { RouteButton } from '../components/RouteButton';

const Homescreen: FC = () => {
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    })

    return (
        <>
            <View >
                <View className='flex flex-row items-center px-4 my-5 '>
                    <Text className='text-2xl flex-1 '>Welcome to home screen</Text>
                    <Home size={25} color='black' />
                </View>

                <RouteButton routeName='Register' title='Go to Register Page' />
            </View>

        </>
    )
}

export default Homescreen
