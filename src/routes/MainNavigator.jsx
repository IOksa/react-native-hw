import { createStackNavigator } from "@react-navigation/stack";
import {StyleSheet } from "react-native";
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import RegistrationScreen from '../screens/RegistrationScreen';
import LoginScreen from '../screens/LoginScreen';
import BottomNavigator from './BottomNavіgator';
import CommentsScreen from '../screens/CommentsScreen';
import MapScreen from '../screens/MapScreen';


const MainStack = createStackNavigator();

const MainNavigator =()=>{
  const navigation = useNavigation();

  return (
    <MainStack.Navigator initialRouteName="RegistrationScreen"  screenOptions={{ headerShown: false }}>
        <MainStack.Screen name="RegistrationScreen" component={RegistrationScreen}/>
        <MainStack.Screen name="LoginScreen" component={LoginScreen} /> 
        <MainStack.Screen
          name="Home"
          component={BottomNavigator}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="CommentsScreen"
          component={CommentsScreen}
          options={{
            headerShown: true,
            headerLeft: () => <Feather name="arrow-left" size={24} color="#21212180" style={styles.iconBack} onPress={() => {
              navigation.goBack();
            }}/>,
      
            headerTitleAlign: 'center',
            title: 'Коментарі',
            headerTitleStyle: {
              fontFamily: 'RobotoMedium',
              fontSize: 17,
              color: '#212121',
              letterSpacing: -0.408,
              },
      
            }}/> 
            <MainStack.Screen
          name="MapScreen"
          component={MapScreen}
          options={{
            headerShown: true,
            headerLeft: () => <Feather name="arrow-left" size={24} color="#21212180" style={styles.iconBack} onPress={() => {
              navigation.goBack();
            }}/>,
      
            headerTitleAlign: 'center',
            title: 'Мапа',
            headerTitleStyle: {
              fontFamily: 'RobotoMedium',
              fontSize: 17,
              color: '#212121',
              letterSpacing: -0.408,
              },
      
            }}/> 
    </MainStack.Navigator>
    )

};

const styles = StyleSheet.create({
  iconBack:{
    left: 16,
  }
});

export default MainNavigator;