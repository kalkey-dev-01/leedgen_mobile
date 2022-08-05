import { StatusBar } from 'expo-status-bar';
import {  Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import Homescreen from './screens/Homescreen';

export default function App() {
  return (
    <NavigationContainer>
    <TailwindProvider>
      <Homescreen/>
    </TailwindProvider>
    </NavigationContainer>
  );
}


