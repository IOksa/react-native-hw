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
          /> 
        <MainStack.Screen
          name="Home"
          component={BottomNavigator}
          options={{ headerShown: false }}
        />
    </MainStack.Navigator>

)

export default MainNavigator;