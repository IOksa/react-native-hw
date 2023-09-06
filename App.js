import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { NavigationContainer } from "@react-navigation/native";
import {View, StyleSheet} from "react-native";
import 'react-native-gesture-handler';

import MainNavigator from './src/routes/MainNavigator';



export default function App() {
  const [fontsLoaded] = useFonts({
    'RobotoBold': require('./src/assets/fonts/roboto-v30-cyrillic_latin-700.ttf'),
    'RobotoMedium': require('./src/assets/fonts/roboto-v30-cyrillic_latin-500.ttf'),
    'RobotoRegular': require('./src/assets/fonts/roboto-v30-cyrillic_latin-regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    
    <>
    <View style={styles.container}>
      <NavigationContainer>
        <MainNavigator/> 
      </NavigationContainer>
      
      <StatusBar style="auto" />
    </View>
    </>
    
  
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
  },
})

