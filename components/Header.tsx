import { View, Text } from 'react-native'
import React, { FC } from 'react'
import { useFonts } from 'expo-font';
import { SafeAreaView } from 'react-native-safe-area-context';

interface Props {
    name: string,

}

const Header: FC<Props> = ({ name }) => {
    let [fontsLoaded] = useFonts({
        'Raleway': require('../assets/Raleway.ttf')
    })
    if (!fontsLoaded) {
        return null;
    }
    return (
      
            <View className="bg-black  flex flex-row mt-5 py-3 items-center justify-center" >
                <Text style={{ fontFamily: 'Raleway' }} className='text-4xl font-normal  text-white'>{name}</Text>
            </View>
       
    )
}

export default Header