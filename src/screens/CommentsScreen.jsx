import React, { useState } from "react";
import { TouchableWithoutFeedback, KeyboardAvoidingView, Keyboard, TouchableOpacity, View, Image, FlatList, TextInput, StyleSheet } from "react-native";
import { useRoute } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import UserComment from '../components/UserComment';
import {POSTS} from '../data/posts';
import {userLogin} from '../data/constants';
import imageUser1 from '../assets/images/user1.png';



const CommentsScreen = () => {
  const { params: {item} } = useRoute();
  const commentsInfo=item.commentsData;
  console.log("commentsInfo=",commentsInfo);

  const [userComment, setUserComment] = useState('');
  const [focus, setFocus] = useState(null);

  const addComment = () =>{
    if(userComment!==''){
      const newComment = {
        commentsId: Math.random(),
        userId: userLogin,
        photoUser: imageUser1,
        commentText: userComment,
        date: Date(),
      };
   

    const foundedElementPost=POSTS.find(option=>option.id===item.id);
   
    const updateElementPost={
      ...foundedElementPost,
      comments: foundedElementPost.comments+1,
      commentsData:foundedElementPost.commentsData.push({...newComment}),
    }
    
    const fromOldPOST=POSTS.find(option=>option.id!==item.id);
    const newPOST={
    ...fromOldPOST,
    updateElementPost,
    }

    setUserComment('');


    }
  }

  return (
   
    <View style={styles.container}>
      <Image source={item.path} style={styles.image}/>
    
      {commentsInfo.length>0 &&           
        <FlatList
          data={commentsInfo}
          renderItem={({item}) => <UserComment item={item}/>}
          keyExtractor={(item) => item.commentsId}
          showsVerticalScrollIndicator={false}
        />
        }

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}>  
          <View>
            <TextInput
              value={userComment}
              onChangeText={setUserComment}
              style={styles.commentInput}
              placeholder="Коментувати..."
              placeholderTextColor='#BDBDBD'
              onFocus={() => setFocus('comment')}       
              onBlur={()=>setFocus(null)}
              />

            <TouchableOpacity style={styles.circle} onPress={addComment}>
              <AntDesign name="arrowup" size={24} color="#FFFFFF" />
            </TouchableOpacity>

          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </View>
     
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 32,
  },

  image:{
    width: '100%',
    borderRadius: 8,
    marginBottom: 32,
  },

  commentInput:{
    height: 50,
    backgroundColor: '#F6F6F6',
    borderRadius: 100,
    marginTop: 6,
    borderColor: '#E8E8E8',
    borderWidth: 1,
    paddingTop: 16,
    paddingBottom: 15,
    paddingLeft: 16,
    paddingRight: 50,
    
  },

  circle:{
    width: 34,
    height: 34,
    borderRadius: 50,
    backgroundColor: '#FF6C00',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 13,
    right: 8,
  },

});

export default CommentsScreen;