import React from "react";
import { View,StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import PostsScreen from '../screens/PostsScreen';
import CreatePostsScreen from '../screens/CreatePostsScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tabs = createBottomTabNavigator();

const BottomNavigator = () => {
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
        headerRight: () => <Feather name="log-out" size={24} color="#BDBDBD" style={styles.iconLogout}/>,
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
        headerLeft: () => <Feather name="arrow-left" size={24} color="#21212180" style={styles.iconBack}/>,
  
        headerTitleAlign: 'center',
        title: 'Створити публікацію',
        headerTitleStyle: {
            fontFamily: 'RobotoMedium',
            fontSize: 17,
            color: '#212121',
            letterSpacing: -0.408

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




