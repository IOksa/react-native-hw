import React from "react";
import {View, TouchableOpacity, Image, StyleSheet, Alert} from "react-native";
import { AntDesign } from '@expo/vector-icons';

const UserAvatar=()=>{
    let isLoadFoto=false;
   
return (
    <View style={styles.userAvatarWrap}>
         <Image source={null} style={styles.userAvatarImage}/>
         <TouchableOpacity style={styles.userAvatarButton} onPress={() => Alert.alert('Add Foto')}>
            {!isLoadFoto 
            ? <AntDesign name="pluscircleo" size={25} color="#FF6C00"/>
            : <AntDesign name="closecircleo" size={25} color="#E8E8E8" />}
          
        </TouchableOpacity>
    </View>
    
    );

}

const styles = StyleSheet.create({
    userAvatarWrap:{
        width: 120,
        height: 120,
        backgroundColor: '#F6F6F6',
        borderRadius: 16,
        position: 'absolute',
        top: -60,
        alignSelf: 'center'
    },

    userAvatarButton:{
        position: 'absolute',
        bottom: 14,
        right: -12,
        backgroundColor: '#ffffff',
        borderRadius: 100,
    },

    userAvatarImage:{
        width: 120,
        height: 120,
        backgroundColor: '#F6F6F6',
        borderRadius: 16,
        objectFit: "cover",
    }


  });

  export default UserAvatar;