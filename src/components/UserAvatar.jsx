import React, {useState} from "react";
import {View, TouchableOpacity, Image, StyleSheet} from "react-native";
import { AntDesign } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

const UserAvatar=()=>{
    const [image, setImage] = useState(null);

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
       
        if (!result.canceled) {
          setImage(result.assets[0].uri);
        }
      };
   
return (
    <View style={styles.userAvatarWrap}>
         {image && <Image source={{ uri: image }} style={styles.userAvatarImage} />}
         <TouchableOpacity style={styles.userAvatarButton} onPress={pickImage}>
            {!image 
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