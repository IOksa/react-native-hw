import React , { useState } from "react";
import { SafeAreaView, FlatList, View, ImageBackground, Text, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import BgImage from '../assets/images/PhotoBG.jpg';
import CommonTitle from '../components/CommonTitle';
import UserAvatar from "../components/UserAvatar";
import { Feather } from '@expo/vector-icons';
import {postQuantity} from '../data/constants'
import {POSTS} from '../data/posts';
import Post from '../components/Post';
import {selectUserName} from '../redux/auth/selectors';

const ProfileScreen = () => {
  const [posts, setPosts] = useState(POSTS);
  // console.log('posts=', posts);
  const isPost=10;
  const navigation = useNavigation();

  const userName = useSelector(selectUserName);


  return (
    <SafeAreaView style={styles.container}>
    
        <ImageBackground source={BgImage} resizeMethod='resize' resizeMode='cover' style={styles.image} >
        
            <View style={styles.formWrap}>
             
              <UserAvatar/>
              <Feather name="log-out" size={24} color="#BDBDBD" style={styles.iconLogout} onPress={() => navigation.navigate("LoginScreen")}/>
              <CommonTitle text={userName}/>
              {isPost>0 &&           
              <FlatList
                data={posts}
                renderItem={({item}) => <Post item={item} like="true" fullLocation="false"/>}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.contentContainer}
              />
              }
              

            </View>
        
        </ImageBackground>

      
        </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  
  },
  image: {
    flex: 1,
    width: '100%',
   

    
  },
  formWrap: {
    width: '100%',
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 92,
    paddingHorizontal: 16,
    marginTop: 147,

  },
  iconLogout:{
    position: 'absolute',
    top: 22,
    right: 16,
  },

  contentContainer: {
    paddingBottom: 65,
  }
});

export default ProfileScreen;