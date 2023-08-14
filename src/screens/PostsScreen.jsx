import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ButtonLogout from '../components/ButtonLogout';


const PostsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>PostsScreen</Text>

      <ButtonLogout/>


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default PostsScreen;