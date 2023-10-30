import React , { useState } from "react";
import { View, Image, Text, SafeAreaView, FlatList, StyleSheet } from "react-native";
import AvatarImage from '../assets/images/User.png';
import {postQuantity} from '../data/constants';
import {POSTS} from '../data/posts';
import Post from '../components/Post';


const PostsScreen = () => {
  const [posts, setPosts] = useState(POSTS);
  const isPost=10;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.avatarWrap}>
        <Image source={AvatarImage} style={styles.avatarImage} />
        <View style={styles.avatarTextWrap}>
          <Text style={styles.avatarName}>Natali Romanova</Text>
          <Text style={styles.avatarEmail}>email@example.com</Text>
        </View>
      </View>
      {isPost>0 &&           
          <FlatList
            data={posts}
            renderItem={({item}) => <Post item={item} like="false" fullLocation="true"/>}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
          />
      }
    </SafeAreaView>

     
     



  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingTop: 32,
    
  },
  avatarWrap:{
    marginBottom: 32,
    marginLeft: 16,
    flexDirection: 'row',
  },
  avatarImage:{
    width: 60,
    height: 60,

  },
  avatarTextWrap: {
    marginLeft: 8,
    justifyContent: "center",
  },
  avatarName:{
    color: '#212121',
    fontFamily: 'RobotoBold',
    fontSize: 13,

  },
  avatarEmail:{
    color: 'rgba(33, 33, 33, 0.80)',
    fontFamily: 'RobotoRegular',
    fontSize: 11,
    
  }
});

export default PostsScreen;