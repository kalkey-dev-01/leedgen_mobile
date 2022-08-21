
import { useNavigation } from '@react-navigation/native';
import React, { FC, useLayoutEffect } from 'react'
import { ActivityIndicator, Text, TextInput, View, ViewProps, TextProps } from 'react-native'
import { MailIcon as Mail, BellIcon as Notifications, SearchCircleIcon as Search, OfficeBuildingIcon as Company, UserGroupIcon as UserGroup } from 'react-native-heroicons/outline'
import { MailIcon as MailS, OfficeBuildingIcon as Comp, UserGroupIcon as UserG } from 'react-native-heroicons/solid'
import { Pressable, ScrollView } from "react-native"
import Animated, { useSharedValue, useAnimatedStyle, withSequence, withTiming, withRepeat } from 'react-native-reanimated';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { FnLnD } from './fnlnd';
import axios, { AxiosResponse } from 'axios';
import { LeedCard } from '../components/LeedCard';
import { EnrichCompany } from './EnrichCompany';

const Tab = createMaterialTopTabNavigator();

const Hscreen: FC = () => {
    const notification = null;
    const rotation = useSharedValue<number>(0);
    const [names, setName] = React.useState<string>('')
    const [data, setData] = React.useState<AxiosResponse>()
    const navigation = useNavigation();
    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ rotateZ: `${rotation.value}deg` }],
        };
    });
    return (
        <View className='bg-white'>
            <View className='flex flex-row items-center px-4 my-5 '>
                <Text className='text-2xl flex-1 '>Find Domains related </Text>

                <Pressable onPress={() => {
                    rotation.value = withSequence(
                        withTiming(-10, { duration: 50 }),
                        withRepeat(withTiming(60, { duration: 150 }), 6, true),
                        withTiming(0, { duration: 50 })
                    );
                    { notification !== null ? navigation.navigate('Notifications' as never) : undefined }

                }}>
                    <Animated.View style={animatedStyle}>
                        <Company size={25} color='black' />
                    </Animated.View>
                </Pressable>
            </View>

            <Text className='text-left mb-4 px-4 text-lg font-semibold'>Enter the name of the company you want to extract info about</Text>
            <View className='flex flex-row justify-center align-middle mx-2'>
                <TextInput className='bg-white border-2 
            flex-1 border-black shadow-lg shadow-gray-500 
            mx-2 mb-3 py-2 text-black px-4 rounded-full'
                    value={names}
                    autoCorrect={false}
                    onChangeText={(e) => {
                        setName(e)
                    }}

                />
                <Search color='black' size={50} onPress={async () => {

                    await axios.post('https://app.leadwity.com/api-product/incoming-webhook/convert-company-names', {
                        "api_key": "M1W1N9B0-N0Q9J1U4-O7A8E2H1-H6I3M1Q9",
                        "company_name": names
                    }).then((res) => {
                        setData(res.data)
                        return data
                    }).catch((err) => {
                        console.log(err)
                    }).finally(() => {

                    })

                }} />
            </View>
            <View className='bg-black h-full py-3'  >
                <Text className='text-white font-bold text-xl mx-4'>LeedList</Text>
                <View>
                    {
                        names !== ""
                            ? <Text className='text-white px-4'>
                                Press the search icon to execute "{names}"...
                            </Text>

                            : <Text className='text-white px-4 text-base'>
                                Your Results will appear here
                            </Text>
                    }
                </View>
                <View className='h-full'>{
                    data !== undefined
                        ? <ScrollView scrollEnabled className=''>
                            <LeedCard data={data} i={0} />
                            <LeedCard data={data} i={1} />
                            <LeedCard data={data} i={2} />
                            <LeedCard data={data} i={3} />
                            <LeedCard data={data} i={4} />
                        </ScrollView>
                        : <Text className='text-white pl-4 font-black pt-10' >It evaluates the responsiveness of the leed</Text>
                }
                </View>
            </View>

        </View>
    );

}


const Homescreen: FC = () => {
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    });
    return (
        <Tab.Navigator initialRouteName='CCN' screenOptions={{ tabBarIndicatorStyle: { backgroundColor: 'black', borderRadius: 100 } }} >
            <Tab.Screen options={{
                tabBarIcon: ({ focused }) =>
                    (focused ? <MailS size={25} color='black' /> : <Mail size={25} color='#151515' />), tabBarShowLabel: false
            }} name='FNLND' component={FnLnD} />
            <Tab.Screen options={{
                tabBarIcon: ({ focused }) =>
                    (focused ? <Comp size={25} color='black' /> : <Company size={25} color='#151515' />), tabBarShowLabel: false
            }} name='CCN' component={Hscreen} />
            <Tab.Screen options={{
                tabBarIcon: ({ focused }) =>
                    (focused ? <UserG size={25} color='black' /> : <UserGroup size={25} color='#151515' />), tabBarShowLabel: false
            }} name='ENCO' component={EnrichCompany} />
        </Tab.Navigator>
    )

}

export default Homescreen
