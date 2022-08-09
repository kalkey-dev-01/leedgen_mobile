import { Text, View } from 'react-native'
import React from 'react'

interface NotificationsProps {

}

export const Notifications: React.FC<NotificationsProps> = ({ }) => {
    return (
        <View className='h-full bg-gray-600'>
            <Text className='text-center h-full '>Notifications</Text>
        </View>
    );
}