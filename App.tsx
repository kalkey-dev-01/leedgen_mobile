import { StatusBar } from 'expo-status-bar';
import {  Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import Homescreen from './screens/Homescreen';
import Header from './components/Header';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RegisterScreen } from './screens/RegisterScreen';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <TailwindProvider>
      <Header name='leedGen' />
    <Stack.Navigator>
      <Stack.Screen name='Home' component={Homescreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
    </TailwindProvider>
    </NavigationContainer>
  );
}


