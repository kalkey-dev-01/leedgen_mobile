import { Text, View } from 'react-native'
import React from 'react'
import { AxiosResponse } from 'axios';

interface EmployeeCardProps {
    data: AxiosResponse | undefined;
    index: number;
}

export const EmployeeCard: React.FC<EmployeeCardProps> = ({ data, index }) => {
    return (
        <View className='bg-black px-4 flex flex-col  gap-1 border-y-2 py-4 border-white'>
            <View className='flex flex-row justify-start'>
                <Text className='text-white font-semibold '>{data?.data['employees'][index]['first_name']} </Text>
                <Text className='text-white font-semibold '>{data?.data['employees'][index]['last_name']}</Text>
            </View>
            <Text className='text-white font-semibold '>{data?.data['employees'][index]['job_title']}</Text>
            <Text className='text-white font-semibold '>{data?.data['employees'][index]['location']}</Text>
            <Text className='text-white font-semibold '>{data?.data['employees'][index]['business_email']}</Text>
            <View className='bg-white '>
                {
                    data?.data['employees'][index]['phone'] === ""
                        ? <Text className='text-black'>No Phone Number Provided</Text>
                        : <Text>{data?.data['employees'][index]['phone']}</Text>
                }
            </View>
            <View className='bg-white '>
                {
                    data?.data['employees'][index]['personal_email'] === ""
                        ? <Text className='text-black'>Personal Email not found</Text>
                        : <Text>{data?.data['employees'][index]['personal_email']}</Text>
                }
            </View>
            <Text className='text-white font-semibold '>{data?.data['employees'][index]['city']}</Text>
            <Text className='text-white font-semibold '>{data?.data['employees'][index]['linkedin_id']}</Text>
        </View>
    );
}

