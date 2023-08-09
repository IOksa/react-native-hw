import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { NavigationContainer } from "@react-navigation/native";
import 'react-native-gesture-handler';

import MainNavigator from './src/routes/MainNavigator';
import BottomNavigator from './src/routes/BottomNavіgator';


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
      <MainNavigator/> 
      {/* <BottomNavigator/> */}
    </NavigationContainer>
    
    <StatusBar style="auto" />
    </>
    
  
  );
}


