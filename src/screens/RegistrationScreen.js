import React from "react";
import { ImageBackground, View, StyleSheet} from "react-native";
import BgImage from '../assets/images/PhotoBG.jpg';
import CommonTitle from '../components/CommonTitle';
import RegistrationForm  from "../components/RegistrationForm";
import UserAvatar from "../components/UserAvatar";

const RegistrationScreen = ()=>{
    return (
        <ImageBackground source={BgImage} resizeMethod='resize' resizeMode='cover' style={styles.image} >
           
            <View style={styles.formWrap}>
                <UserAvatar/>
                <CommonTitle text='Реєстрація'/>
                <RegistrationForm/>

            </View>
           
        </ImageBackground>
        
        );

}

const styles = StyleSheet.create({
    image: {
      flex: 1,
      justifyContent: "flex-end",
      borderWidth :1,
      
    },
 
    formWrap: {
        backgroundColor: '#ffffff',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingTop: 92,
        paddingLeft: 16,
        paddingRight: 16,
        
    }
   
  });
  
export default RegistrationScreen;