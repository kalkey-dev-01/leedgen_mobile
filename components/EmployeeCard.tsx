import { Text, View } from 'react-native'
import React from 'react'
import { AxiosResponse } from 'axios';


interface EmployeeCardProps {
    data: AxiosResponse | undefined;
    index: number;
}
    
export const EmployeeCard: React.FC<EmployeeCardProps> = ({ data, index }) => {

    const EmployeeNIndex = data?.data['employees'];

    return (
        <>
            <View className='bg-black px-4 flex flex-col  gap-1 border-y-2 py-4 border-white'>
                {
                    EmployeeNIndex !== undefined ?
                        <>
                            <View className='flex flex-row justify-start'>
                                <Text className='text-white font-semibold '>{EmployeeNIndex[index]['first_name']} </Text>
                                <Text className='text-white font-semibold '>{EmployeeNIndex[index]['last_name']}</Text>
                            </View>
                            <View className='grid grid-cols-3'>
                                <Text className='text-white grid font-semibold '>{EmployeeNIndex[index]['job_title']}</Text>
                                <Text className='text-white font-semibold '>{EmployeeNIndex[index]['location']}</Text>
                                <Text className='text-white font-semibold '>{EmployeeNIndex[index]['business_email']}</Text>
                            </View>
                            <View className='bg-white '>
                                {
                                    EmployeeNIndex[index]['phone'] === ""
                                        ? <Text className='text-black'>No Phone Number Provided</Text>
                                        : <Text>{EmployeeNIndex[index]['phone']}</Text>
                                }
                            </View>
                            <View className='bg-white '>
                                {
                                    EmployeeNIndex[index]['personal_email'] === ""
                                        ? <Text className='text-black'>Personal Email not found</Text>
                                        : <Text>{EmployeeNIndex[index]['personal_email']}</Text>
                                }
                            </View>
                            <Text className='text-white font-semibold '>{EmployeeNIndex[index]['city']}</Text>
                            <Text className='text-white font-semibold '>{EmployeeNIndex[index]['linkedin_id']}</Text>
                        </>
                        : <Text className='text-white'>No data found</Text>
                }
            </View>
        </>
    );
}

