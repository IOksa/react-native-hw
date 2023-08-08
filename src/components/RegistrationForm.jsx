import React, { useState } from "react";

import {
  TextInput,
  TouchableOpacity,
  Text,
  View,
  Alert,
  KeyboardAvoidingView,
  Platform,
  StyleSheet} from "react-native";
import { useNavigation } from '@react-navigation/native';

const RegistrationForm =()=>{
    const [userLogin, setUserLogin] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [focus, setFocus] = useState(null);
    const [isShowPassword, setIsShowPassword]=useState(true);

    const navigation = useNavigation();

    const onLogin = () => {
      if (userLogin && userEmail && userPassword){
        // Alert.alert("Credentials", `${userLogin} ${userEmail} ${userPassword}. Реєстрація пройшла успішно`);
        // console.log(`Credentials - login: ${userLogin}, email: ${userEmail}, password: ${userPassword}`);
        setUserLogin('');
        setUserEmail('');
        setUserPassword('');
        navigation.navigate("Home",{screen: 'PostsScreen'});
      }
      else {
        Alert.alert("Credentials", `Заповніть всі поля для реєстрації`);
      }
    };
    
const ToggleShowPassword = ()=>{
  setIsShowPassword(!isShowPassword);
}

 return (


    <>
    <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}>
     <TextInput
        value={userLogin}
        onChangeText={setUserLogin}
        style={[styles.formInput, focus==="login" && styles.activeFormInput]}
        placeholder="Логін"
        placeholderTextColor='#BDBDBD'
        onFocus={() => setFocus("login")}
        onBlur={()=>setFocus(null)}
   
        
      />
      </KeyboardAvoidingView>
      <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}>
      <TextInput
        value={userEmail}
        onChangeText={setUserEmail}
        style={[styles.formInput, focus==="email" && styles.activeFormInput] }
        placeholder="Адреса електронної пошти"
        placeholderTextColor='#BDBDBD'
        onFocus={() => setFocus("email")}
        onBlur={()=>setFocus(null)}
        
      />
      </KeyboardAvoidingView>
      <View style={styles.inputPasswordWrap}>
      <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}> 
      <TextInput
        value={userPassword}
        onChangeText={setUserPassword}
        style={[styles.formInput, styles.formInputLastChild, focus==='password' && styles.activeFormInput]}
        placeholder="Пароль"
        placeholderTextColor='#BDBDBD'
        secureTextEntry={isShowPassword}
        onFocus={() => setFocus('password')}       
        onBlur={()=>setFocus(null)}
        />
      </KeyboardAvoidingView>
      <TouchableOpacity style={styles.showPasswordButton} onPress={ToggleShowPassword}>
        <Text style={styles.showPasswordText}>Показати</Text>
      </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.formButton} onPress={onLogin}>
        <Text style={styles.formButtonText}>Зареєструватися</Text>
      </TouchableOpacity>

      <Text style={styles.loginLinkText}>Вже є акаунт?&nbsp;
        <Text style={[styles.loginLinkText, styles.loginLink]} onPress={() => navigation.navigate("LoginScreen")}>Увійти</Text>
      </Text>
          
    </>
    
    );

};

const styles = StyleSheet.create({
    formInput: {
      height: 50,
      paddingTop: 16,
      paddingBottom: 15,
      paddingHorizontal:16,
      marginBottom: 16,

      borderWidth: 1,
      borderColor: '#E8E8E8',
      borderRadius: 8,
      
      backgroundColor: '#F6F6F6',
      
      color: '#212121',
 
      fontSize: 16,
      fontFamily: 'RobotoRegular',
    },

    formInputLastChild: {
      marginBottom: 43,
    },

    activeFormInput:{
      borderColor: '#FF6C00',
      backgroundColor: '#FFFFFF',
      
    },

    formButton: {
      marginBottom: 16,
      backgroundColor: '#FF6C00',
      paddingVertical: 16,
      paddingHorizontal: 32,    
      alignItems: 'center',
      borderRadius: 100,

    },

    formButtonText:{
      color: '#ffffff',
      fontFamily: 'RobotoRegular',
      fontSize: 16,
    },

    loginLinkText: {
      color: '#1B4371',
      textAlign: 'center',
      fontFamily: 'RobotoRegular',
      fontSize: 16,
      marginBottom: 78,
    },

    loginLink: {
      textDecorationLine: 'underline',
    },

    inputPasswordWrap:{
      position: 'relative',

    },

    showPasswordButton:{
      position: 'absolute',
      right: 16,
      top: 13,
 
    },
    showPasswordText:{
      color: '#1B4371',
      fontFamily: 'RobotoRegular',
      fontSize: 16, 
    },


  });


  
export default RegistrationForm;

