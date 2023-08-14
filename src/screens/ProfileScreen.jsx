import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ButtonLogout from '../components/ButtonLogout';


const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text>ProfileScreen</Text>
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

export default ProfileScreen;