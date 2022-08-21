import { Image, Text, View } from 'react-native'
import React from 'react'
import { AxiosResponse } from 'axios';
import usePost from './utils/usePost';

interface LeedCardProps {
    data: AxiosResponse | undefined;
    i: number;
  
}
 
export const LeedCard: React.FC<LeedCardProps> = ({ data, i }) => {
    return (
        <View className='bg-white flex flex-row  my-2.5 px-4 py-2.5 items-center align-middle justify-between '>
            <Text className='text-black  font-bold text-base'>{data?.data[i]['name']}</Text>
            <Text className='text-black font-semibold text-sm'>{data?.data[i]['domain']}</Text>
            {/* <Image source={{ uri: `${data?.data[i]['logo']}` }}
                style={{ backgroundColor: 'white' }}
                width={100} height={100} /> */}
        </View>
    );
}