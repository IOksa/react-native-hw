import React from "react";
import { ImageBackground, View, StyleSheet} from "react-native";
import BgImage from '../assets/images/PhotoBG.jpg';
import CommonTitle from '../components/CommonTitle';
import LoginForm  from "../components/LoginForm";


const LoginScreen = ()=>{
    return (
        <ImageBackground source={BgImage} resizeMethod='resize' resizeMode='cover' style={styles.image} >
           
            <View style={styles.formWrap}>
                <CommonTitle text='Увійти'/>
                <LoginForm/>

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
        paddingTop: 32,
        paddingLeft: 16,
        paddingRight: 16,
        
    }
   
  });
  
export default LoginScreen;