import { Pressable, ScrollView, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { UserGroupIcon as UserGroup, DocumentSearchIcon as DocSearch } from 'react-native-heroicons/outline'
import axios, { AxiosResponse, } from 'axios'
import { EmployeeCard } from '../components/EmployeeCard'
interface EnrichCompanyProps {

}

export const EnrichCompany: React.FC<EnrichCompanyProps> = ({ }) => {
    const [data, SetData] = useState<AxiosResponse | undefined>()

    const [domain, setDomain] = useState<string>('')
    return (
        <View className='bg-white h-full'>
            <View className='bg-black flex flex-row items-center px-4' >
                <View className='flex-1'>
                    <Text className='text-white font-semibold text-base my-5'>Use a Company domain to find out the employees information</Text>
                </View>
                <UserGroup size={25} color={'white'} />
            </View>
            <View className='my-5 mx-4 flex flex-row align-middle items-center'>
                <TextInput autoCorrect={false} value={domain} autoCapitalize={'none'} onChangeText={(e) => {
                    setDomain(e)
                }} placeholder='"domain.com" --use-this-format' className='px-3 font-semibold bg-white rounded-3xl border-black border-2 flex-1 mx-2' />
                <Pressable onPress={async () => {
                    await axios.post('https://app.leadwity.com/api-product/incoming-webhook/enrich-company', {
                        "api_key": "M1W1N9B0-N0Q9J1U4-O7A8E2H1-H6I3M1Q9",
                        "domain": domain
                    }).then((res) => {
                        SetData(res)
                        return data

                    }).catch((e) => {
                        console.error(e)
                    }).finally(() => {

                    })
                }}>
                    <View className='bg-black p-1 rounded-full'>
                        <DocSearch size={25} color={'white'} />
                    </View>
                </Pressable>
            </View>
            <View className='bg-white border-black border-t-2 px-4 py-1.5'>
                {
                    domain !== ""
                        ? <Text className='text-black  text-left font-bold'>Press Search to Leed "{domain}" Employees.</Text>
                        : <Text className='text-black  text-lg text-left font-semibold'>Enter The domain</Text>
                }
            </View>
            {/* Axios Post Function on  https://app.leadwity.com/api-product/incoming-webhook/enrich-company */}
            <View className='h-full bg-white'>
                {
                    data !== undefined ?
                        <ScrollView>
                            <EmployeeCard data={data} index={0} />
                            <EmployeeCard data={data} index={1} />
                            <EmployeeCard data={data} index={2} />
                            <EmployeeCard data={data} index={3} />
                            <EmployeeCard data={data} index={4} />
                            <EmployeeCard data={data} index={5} />
                            <EmployeeCard data={data} index={6} />
                            <EmployeeCard data={data} index={7} />
                            <EmployeeCard data={data} index={8} />
                            <EmployeeCard data={data} index={9} />

                        </ScrollView>
                        : <View className='h-full bg-black flex items-center justify-start pt-20'>
                            <Text className='text-xl text-white font-black text-center'>
                                Make sure the format is in 'companydomain.com' or the search might not complete. :-!
                            </Text>
                        </View>
                }
            </View>

        </View >
    );
}