import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import PostsScreen from './PostsScreen';

const Stack = createStackNavigator();

const Home = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="PostsScreen" component={PostsScreen} /> 
    </Stack.Navigator>
  );
};



export default Home;