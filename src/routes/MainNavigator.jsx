import { createStackNavigator } from "@react-navigation/stack";
import RegistrationScreen from '../screens/RegistrationScreen';
import LoginScreen from '../screens/LoginScreen';
import PostsScreen from '../screens/PostsScreen';
import Home from '../screens/Home';
import BottomNavigator from './BottomNavіgator';
import ButtonLogout from '../components/ButtonLogout';

const MainStack = createStackNavigator();

const MainNavigator =()=>(
    <MainStack.Navigator initialRouteName="RegistrationScreen"  screenOptions={{ headerShown: false }}>
        <MainStack.Screen name="RegistrationScreen" component={RegistrationScreen}/>
        <MainStack.Screen name="LoginScreen" component={LoginScreen} /> 
        <MainStack.Screen 
          name="PostsScreen" 
          component={PostsScreen} 
          options={{
            headerTitleAlign: 'center',
            title: 'Публікації',
            headerTitleStyle: {
              fontFamily: 'RobotoMedium',
              fontSize: 17,
              lineHeight: 1.2941,
              color: '#212121',
             
            },
            headerRight: () => (<ButtonLogout/>),
          }} /> 
        <MainStack.Screen
          name="Home"
          component={BottomNavigator}
          options={{ headerShown: false }}
        />
    </MainStack.Navigator>

)

export default MainNavigator;