import React from "react";
import { useEffect, useState, useRef } from 'react';
import { ActivityIndicator, View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard,  KeyboardAvoidingView, Platform, ImageBackground, Alert, StyleSheet } from "react-native";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import * as ImagePicker from 'expo-image-picker';
import * as Location from 'expo-location';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import {POSTS} from '../data/posts';

const CreatePostsScreen = () => {
  const [photo, setPhoto] = useState('');
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState(null);
  const [locationTitle, setLocationTitle] = useState('');

  const isDisabled = !(photo && title && locationTitle);

  const [hasPermissionCamera, setHasPermissionCamera] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation();

  const getLocation = async()=>{
    console.log("getLocation")
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
      }

      let location = await Location.getCurrentPositionAsync({});
      const coords = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      };
      console.log("coords=", coords);
      setLocation(coords);
    } catch (err) {
      console.log(err.message);
      navigation.navigate('Home');
    } 
  };
 

  useEffect(() => {
    
    (async () => {
      console.log("useEffect")
      try {
        const { status } = await Camera.requestCameraPermissionsAsync();
        await MediaLibrary.requestPermissionsAsync();
        setHasPermissionCamera(status === "granted");
      } catch (err) {
        console.log(err.message);
        navigation.navigate('Home');
      } 
    })();
    getLocation();
  }, []);

  if (hasPermissionCamera === null) {
    return <View />;
  }
  if (hasPermissionCamera === false) {
    return <Text>No access to camera</Text>;
  }

  const takePhoto = async () => {
    console.log("takePhoto")
    try {
   
      if (cameraRef) {
       
        setIsLoading(true);
        const { uri } = await cameraRef.takePictureAsync();
        await MediaLibrary.createAssetAsync(uri);
        setPhoto(uri);
        await getLocation();
     
      }
    } catch (err) {
      console.log(err.message);
      navigation.navigate('Home');
    } finally {
      setIsLoading(false);
    }
  };

  const addPost = ()=>{
    const post = {
      id: Math.ceil(Math.random()*100000+1),
      path:photo,
      title,
      comments: 0,
      likes: 0,
      coords: location,
      locationDescription: locationTitle, 
      commentsData:[],
    };

    console.log("post=", post);
    POSTS.push(post);
    deleteAll();
    
    navigation.navigate('PostsScreen', { post });
  }

  const deletePhoto = () => {
    setPhoto('');
  };

  const deleteAll = () => {
    setPhoto('');
    setTitle('');
    setLocationTitle('');
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
          style={styles.container}>

        <View>
        {photo.length>0 ? (
            <ImageBackground source={{ uri: photo }} style={styles.photoWrap}>
                <TouchableOpacity
                  onPress={deletePhoto}
                  style={styles.iconDelete}
                >
                  <MaterialIcons
                    name="delete"
                    size={24}
                    color={'#BDBDBD'}
                    
                  />
                </TouchableOpacity>
              </ImageBackground>
            ) : (
          <Camera
            style={styles.camera}
            type={type}
            ref={setCameraRef}
            >
            <View style={styles.photoWrap}>
              
              <TouchableOpacity
                onPress={takePhoto}
                disabled={isLoading}
              >
                  {isLoading ? (
                    <ActivityIndicator size="small" color="#FFf" />
                  ) : (
                  <View style={styles.circle}>
                    <FontAwesome name="camera" size={24} color="#BDBDBD" />
                  </View>
                   )}
              </TouchableOpacity>

              <TouchableOpacity
              style={styles.flip}
              onPress={() => {
                setType(
                  type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                );
         
              }}
              >
               
               <MaterialIcons name="flip-camera-ios" size={24} color="#BDBDBD" />
             
              </TouchableOpacity>
            </View>
          </Camera>
          )}


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
              value={locationTitle}
              onChangeText={setLocationTitle}
              style={[styles.input,styles.inputLocation]}
              placeholder="Місцевість"
              placeholderTextColor='#BDBDBD'
              />
            </View>

            <TouchableOpacity 
            disabled={isDisabled}
            style={[styles.butPost, isDisabled===true && styles.butPostDisabled]} onPress={addPost}>
              <Text style={[styles.butPostText, isDisabled===true && styles.butPostDisabled]}>Опублікувати</Text>
            </TouchableOpacity>
     
        </View>

        <View style={styles.trashWrap}>
          <View style={styles.backgroundTrash}>
            <Feather name="trash-2" size={24} color="#BDBDBD" onPress={deleteAll}/>
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
  },

  


  button: { alignSelf: "center" },

  takePhotoOut: {
    borderWidth: 2,
    borderColor: "white",
    height: 50,
    width: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },

  takePhotoInner: {
    borderWidth: 2,
    borderColor: "white",
    height: 40,
    width: 40,
    backgroundColor: "white",
    borderRadius: 50,
  },

  flip: {
    position: 'absolute',
    right: 10,
    bottom: 10,
    zIndex: 999,
    // alignSelf: 'flex-end',
  },


  iconDelete:{
    position: 'absolute',
    right: 10,
    bottom: 10,
  }
});

export default CreatePostsScreen;
