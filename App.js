import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import 'react-native-gesture-handler';
import RegistrationScreen from './src/screens/RegistrationScreen';
import LoginScreen from './src/screens/LoginScreen';
import PostScreen from './src/screens/PostsScreen';
import Home from './src/screens/Home';

const MainStack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    'RobotoMedium': require('./src/assets/fonts/roboto-v30-cyrillic_latin-500.ttf'),
    'RobotoRegular': require('./src/assets/fonts/roboto-v30-cyrillic_latin-regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    
    <>
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="RegistrationScreen">
        <MainStack.Screen name="Home" component={Home}  />
        <MainStack.Screen name="RegistrationScreen" component={RegistrationScreen} options={{ title: "Start screen" }} />
        <MainStack.Screen name="LoginScreen" component={LoginScreen} />
        <MainStack.Screen name="PostScreen" component={PostScreen} />
      </MainStack.Navigator>
    </NavigationContainer>
    <StatusBar style="auto" />
    </>
    
  
  );
}


