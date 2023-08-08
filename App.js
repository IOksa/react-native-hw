import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  View } from 'react-native';
import { useFonts } from 'expo-font';
import RegistrationScreen from './src/screens/RegistrationScreen';
import LoginScreen from './src/screens/LoginScreen';
import PostScreen from './src/screens/PostsScreen';

export default function App() {
  const [fontsLoaded] = useFonts({
    'RobotoMedium': require('./src/assets/fonts/roboto-v30-cyrillic_latin-500.ttf'),
    'RobotoRegular': require('./src/assets/fonts/roboto-v30-cyrillic_latin-regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <RegistrationScreen/>
        {/* <LoginScreen/>
        <PostScreen/> */}
        <StatusBar style="auto" />
      
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
});
