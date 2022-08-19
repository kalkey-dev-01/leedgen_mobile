import { Pressable, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { UserGroupIcon as UserGroup, DocumentSearchIcon as DocSearch } from 'react-native-heroicons/outline'
import axios, { AxiosResponse, } from 'axios'
interface EnrichCompanyProps {

}

export const EnrichCompany: React.FC<EnrichCompanyProps> = ({ }) => {
    const [data, SetData] = useState<AxiosResponse | undefined>()
    const [domain, setDomain] = useState<string>('')
    return (
        <View className='bg-white h-full'>
            <View className='bg-black flex flex-row items-center px-4  ' >
                <View className='flex-1'>
                    <Text className='text-white font-semibold text-base my-5'>Use a Company domain to find out the employees information</Text>
                </View>
                <UserGroup size={25} color={'white'} />
            </View>
            <View className='my-5 mx-4 flex flex-row align-middle items-center'>
                <TextInput value={domain} onChangeText={(e) => {
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
                        console.log('Employee Post Function')
                    })
                }}>
                    <View className='bg-black p-1 rounded-full'>
                        <DocSearch size={25} color={'white'} />
                    </View>
                </Pressable>
            </View>
            <View className='bg-white'>
                {
                    domain !== ""
                        ? <Text className='text-black  text-center font-bold'>Press Search to Leed "{domain}" Employees.</Text>
                        : <Text className='text-black  text-lg text-center font-semibold'>Enter The domain</Text>
                }
            </View>
            {/* Axios Post Function on  https://app.leadwity.com/api-product/incoming-webhook/enrich-company */}
            <View>
                {
                    data !== undefined ? <View>
                        {console.log(data?.data['employees'][0]['first_name'])}
                    </View> : <View>
                        <Text>
                            Non functional domain or type again
                        </Text>
                    </View>
                }
            </View>

        </View >
    );
}