import React from "react";
import { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard,  KeyboardAvoidingView, Platform, StyleSheet } from "react-native";

import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const CreatePostsScreen = () => {
  const [photo, setPhoto] = useState('');
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const disabled = !(photo && title && location);
 

  const onPost = ()=>{
  
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
          style={styles.container}>

        <View>
          <View style={styles.photoWrap}>
            <View style={styles.circle}>
              <FontAwesome name="camera" size={24} color="#BDBDBD" />
            </View>

          </View>

          <Text style={styles.text}>{photo ? 'Peдагувати фото' : 'Завантажте фото'}</Text>

          <TextInput
            name="name"
            value={title}
            onChangeText={setTitle}
            style={styles.input}
            placeholder="Назва..."
            placeholderTextColor='#BDBDBD'
          />

          <View style={styles.locationWrap}>
            <Feather name="map-pin" size={24} color="#BDBDBD" style={styles.iconLocation}/>
            <TextInput
            name="location"
            value={location}
            onChangeText={setLocation}
            style={[styles.input,styles.inputLocation]}
            placeholder="Місцевість"
            placeholderTextColor='#BDBDBD'
            />
          </View>

          <TouchableOpacity style={[styles.butPost, disabled===true && styles.butPostDisabled]} onPress={onPost}>
            <Text style={[styles.butPostText, disabled===true && styles.butPostDisabled]}>Опублікувати</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.trashWrap}>
          <View style={styles.backgroundTrash}>
            <Feather name="trash-2" size={24} color="#BDBDBD" />
          </View>
        </View>


      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 32,
    justifyContent: "space-between",
  },
  
  photoWrap:{
    width: '100%',
    height: 240,
    borderRadius: 8,
    borderColor: '#E8E8E8',
    borderWidth: 1,
    backgroundColor:'#F6F6F6',
    justifyContent: 'center',
    alignItems:'center',
  },

  circle:{
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: '#FFFFFF',
    alignItems:'center',
    justifyContent: 'center',
  },

  text:{
    color: '#BDBDBD',
    fontFamily: 'RobotoRegular',
    fontSize: 16,
    marginTop: 8,
    marginBottom: 32,

  
  },
  input: {
    width: '100%',
    height: 50,
    
    fontSize: 16,
    color: '#212121',
    fontFamily: 'RobotoMedium',
    fontSize: 16,

    borderBottomColor: '#E8E8E8',
    borderBottomWidth: 1,

    marginBottom: 16,
  },
  locationWrap:{
    width: '100%',
  },

  inputLocation:{
    paddingLeft: 28,
  },

  iconLocation:{
    position: 'absolute',
    top: 13,

  },

  butPost: {
    width: '100%',
    height: 51,
    marginVertical: 16,
    backgroundColor: '#FF6C00',
    paddingVertical: 16,
    paddingHorizontal: 32,    
    alignItems: 'center',
    borderRadius: 100,

  },

  butPostText:{
    color: '#FFFFFF',
    fontFamily: 'RobotoRegular',
    fontSize: 16,
  },

  butPostDisabled:{
    backgroundColor: '#F6F6F6',
    color: '#BDBDBD',
  },

  trashWrap:{
    alignItems: 'center',
  },

  backgroundTrash:{
    width: 70,
    height: 40,
    backgroundColor: '#F6F6F6',
    borderRadius: 20,
    alignItems:'center',
    justifyContent: 'center',
  }
});

export default CreatePostsScreen;