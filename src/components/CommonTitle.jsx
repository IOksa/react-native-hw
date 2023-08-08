import React from "react";
import { Text, StyleSheet} from "react-native";

const CommonTitle = ({text})=>{
    return (
        <Text style={styles.text}>{text}</Text>
        );


};

const styles = StyleSheet.create({
     text: {
        color: '#212121',
        fontFamily: "RobotoMedium",
        fontSize: 30,
        letterSpacing: 0.3,
        textAlign: 'center',
        marginBottom: 32,
      },
    
   
  });
  
export default CommonTitle;