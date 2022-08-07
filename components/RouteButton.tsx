import { Text, View, Pressable, ViewProps, TextProps } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

interface RouteButtonProps {
    title: string,
    routeName: string

}

export const RouteButton: React.FC<RouteButtonProps> = ({ routeName, title }) => {
    const nav = useNavigation()
    return (

        <View className='bg-black min-w-max mx-10 rounded-full'>
            <Pressable onPress={() => {
                nav.navigate(routeName as never)
            }}>
                <Text className='text-lg text-center text-white py-2 px-3'>{title}</Text>
            </Pressable>
        </View>
    );
}