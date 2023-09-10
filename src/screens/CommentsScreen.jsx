import React from "react";
import { View, Text, Image, FlatList, StyleSheet } from "react-native";
import { useRoute } from '@react-navigation/native';

import UserComment from '../components/UserComment';

const CommentsScreen = () => {
  const { params: {item} } = useRoute();
  
  console.log("item=", item);
  const commentsInfo=item.commentsDate;

  console.log("commentsInfo=", commentsInfo);

  return (
    <View style={styles.container}>
      <Image source={item.path} style={styles.image}/>
      <View>
      {commentsInfo.length>0 &&           
        <FlatList
          data={commentsInfo}
          renderItem={({item}) => <UserComment item={item}/>}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
        }

      </View>

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