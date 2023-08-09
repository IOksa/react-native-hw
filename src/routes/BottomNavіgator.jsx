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
      // "tabBarActiveBackgroundColor": 'red',
      tabBarStyle: {
         height: 83,
      },
   

    }}>

      <Tabs.Screen
       name="PostsScreen"
       component={PostsScreen}
       options={ {
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
});

export default BottomNavigator;




