import React from "react";
import { ImageBackground, View, TouchableWithoutFeedback, Keyboard,  KeyboardAvoidingView,
Platform, StyleSheet} from "react-native";
import BgImage from '../assets/images/PhotoBG.jpg';
import CommonTitle from '../components/CommonTitle';
import RegistrationForm  from "../components/RegistrationForm";
import UserAvatar from "../components/UserAvatar";

const RegistrationScreen = ({ navigation })=>{
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "height"}
                style={styles.container}
                keyboardVerticalOffset={-70}>

                <View style={styles.container}>
                    <ImageBackground source={BgImage} resizeMethod='resize' resizeMode='cover' style={styles.image} >
                    
                        <View style={styles.formWrap}>
                            <UserAvatar/>
                            <CommonTitle text='Реєстрація'/>
                            <RegistrationForm/>

                        </View>
                    
                    </ImageBackground>
                </View>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
        );

}

const styles = StyleSheet.create({
    container:{
        flex: 1,
       
    },

    image: {
      flex: 1,
      justifyContent: "flex-end",
      borderWidth: 1,
      
    },
 
    formWrap: {
        backgroundColor: '#ffffff',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingTop: 92,
        paddingHorizontal: 16,
   
    }
   
  });
  
export default RegistrationScreen;