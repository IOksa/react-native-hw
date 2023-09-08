import React from "react";
import { View, Image, FlatList, StyleSheet } from "react-native";
import { useRoute } from '@react-navigation/native';

import UserComment from '../components/UserComment';

const CommentsScreen = () => {
  const { params: {item} } = useRoute();
  
  console.log("item=", item);

  return (
    <View style={styles.container}>
      {/* <Image source={item.path} style={styles.image}/> */}
      {/* <View>
      {comments.length>0 &&           
        <FlatList
          data={comments}
          renderItem={({item}) => <UserComment item={item}/>}
          keyExtractor={(item) => item.commentsId}
          showsVerticalScrollIndicator={false}
        />
        }

      </View> */}
      <Text>CommentsScreen</Text>
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

});

export default CommentsScreen;