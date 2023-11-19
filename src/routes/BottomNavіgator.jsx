import React from "react";
import { View,StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { useDispatch} from 'react-redux';
import PostsScreen from '../screens/PostsScreen';
import CreatePostsScreen from '../screens/CreatePostsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { logOut } from '../redux/auth/operations';

const Tabs = createBottomTabNavigator();

const BottomNavigator = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const onLogOut=()=>{
    dispatch(logOut());
    navigation.navigate("LoginScreen");
  
  }

  return (
    <Tabs.Navigator screenOptions={{
      "tabBarActiveTintColor": "white",
      "tabBarInactiveTintColor": "gray", 
    
      tabBarStyle: {
         height: 83,
      },
      headerStyle: {
        backgroundColor: '#FFFFFF',
        borderBottomColor: '#e8e8e8',
        borderBottomWidth: 1,
        height: 88,
      },
   

    }}>

      <Tabs.Screen
       name="PostsScreen"
       component={PostsScreen}
       options={ {
        headerRight: () => <Feather name="log-out" size={24} color="#BDBDBD" style={styles.iconLogout} onPress={onLogOut}/>,
        headerTitleAlign: 'center',
        title: 'Публікації',
        headerTitleStyle: {
            fontFamily: 'RobotoMedium',
            fontSize: 17,
            color: '#212121',
             
            },
        tabBarLabel: '',
        tabBarIcon: ({focused, color}) => (
          <View style={[styles.activeBackgroundTab, focused===false && styles.nonactiveBackgroundTab]}>
            <SimpleLineIcons name="grid" size={24} color={color} />
          </View>
        )}}
        />

      <Tabs.Screen
       name="CreatePostsScreen"
       component={CreatePostsScreen}
       options={{
        headerLeft: () => <Feather name="arrow-left" size={24} color="#21212180" style={styles.iconBack} onPress={() => {
          navigation.navigate("PostsScreen");
        }}/>,
  
        headerTitleAlign: 'center',
        title: 'Створити публікацію',
        headerTitleStyle: {
            fontFamily: 'RobotoMedium',
            fontSize: 17,
            color: '#212121',
            letterSpacing: -0.408

            },
        tabBarStyle: {
          display: 'none',
        },
        tabBarLabel: '',
        tabBarIcon: ({focused, color})=>(
          <View style={[styles.activeBackgroundTab, focused===false && styles.nonactiveBackgroundTab]}>
            <Feather name="plus" size={24} color={color} />
          </View>
        )}}
         />

      <Tabs.Screen
       name="ProfileScreen"
       component={ProfileScreen}
       options={{
        headerShown: false,
        tabBarLabel: '',
        tabBarIcon: ({focused, color}) => (
          <View style={[styles.activeBackgroundTab, focused===false && styles.nonactiveBackgroundTab]}>
            <Feather name="user" size={24} color={ color} />
          </View>)
        }}
        />
        
      
    </Tabs.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",

  },

  activeBackgroundTab:{
    marginTop: 9,
    height: 50,
    width: 90,
    borderRadius: 20,
    backgroundColor: '#FF6C00',
    justifyContent: 'center',
    alignItems: 'center',
   
  },
  nonactiveBackgroundTab:{
    backgroundColor: 'white',
  },

  iconLogout:{
    right: 10,
  },

  iconBack:{
    left: 10,
  
  }
});

export default BottomNavigator;




