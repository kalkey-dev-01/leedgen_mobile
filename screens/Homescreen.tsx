
import { View, Text, Button } from 'react-native'
import React, { FC } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Animated, { useAnimatedProps, useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated'


const Homescreen: FC = () => {
    const offset = useSharedValue(0);
    const AnimatedStyles = useAnimatedStyle(() => {
        return {
            transform: [{
                translateX: offset.value * 255
            }],

        }
    })
    return (
        <SafeAreaView>
            <Animated.View className={`bg-black rounded-full h-10 w-10 my-10 mx-10`} style={AnimatedStyles} />
            <Button onPress={() => {
                offset.value = withSpring(Math.random())
            }} title="press" />
        </SafeAreaView>
    )
}

export default Homescreen