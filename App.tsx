import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import Homescreen from './screens/Homescreen';
import Header from './components/Header';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { FnLnD } from './screens/fnlnd';
import { Notifications } from './screens/notifications';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';


const Stack = createNativeStackNavigator();


export default function App() {
  let [fontsLoaded] = useFonts({
    'Raleway': require('../leedgen/assets/Raleway.ttf')
  })
  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaProvider>

      <NavigationContainer>
        <TailwindProvider>

          <Stack.Navigator screenOptions={{
            headerTintColor: 'black', headerTitleStyle: { fontFamily: 'Raleway', color: 'white', fontWeight: '300', fontSize: 30 }, headerTitleAlign: 'center',
            headerStyle: { backgroundColor: 'black' }
          }}>
            <Stack.Screen name='leedGen' component={Homescreen} />

            <Stack.Screen name="Notifications" component={Notifications} />
          </Stack.Navigator>

        </TailwindProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}


