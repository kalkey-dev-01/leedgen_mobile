import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import Homescreen from './screens/Homescreen';
import Header from './components/Header';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { FnLnD } from './screens/fnlnd';
import { Notifications } from './screens/notifications';
import { SafeAreaProvider } from 'react-native-safe-area-context';


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <SafeAreaProvider>
    <NavigationContainer>
      <TailwindProvider>
        <Header name='leedGen' />
        <Stack.Navigator screenOptions={{
          //  header: () => null
          headerTitleAlign: 'center'
        }}>
          <Stack.Screen name='Home' component={Homescreen} />
          <Stack.Screen name="Register" component={FnLnD} />
          <Stack.Screen name="Notifications" component={Notifications} />
        </Stack.Navigator>
      </TailwindProvider>
    </NavigationContainer>
    </SafeAreaProvider>
  );
}


