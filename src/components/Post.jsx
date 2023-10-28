import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Post = ({item, likes, fullLocation}) =>{
    console.log("item=", item);
    console.log("likes=", likes);
    console.log("fullLocation=", fullLocation);
    const navigation = useNavigation();
    
    return (
    
    <View>
        <Image source={item.path} style={styles.image}/>
        <Text style={styles.postTitle}>{item.title}</Text>
        <View style={styles.infoWrap}>
            <View style={styles.wrapper}>
            <View style={styles.commentsWrap}>
                <Feather name="message-circle" size={24} style={[styles.icon, likes==='true' && styles.iconProfile]} onPress={() => {
          navigation.navigate("CommentsScreen", {item});
        }}/>
                <Text style={[styles.commentsText, likes==='true' && styles.textProfile]}>{item.comments}</Text>
            </View>
            {likes==='true' &&
            <View style={styles.likesWrap}>
                <Feather name="thumbs-up" size={24} color="#FF6C00" />
                <Text style={styles.textProfile}>{item.likes}</Text>
            </View>
            }
            </View>
            <TouchableOpacity style={styles.locationWrap} onPress={() => {
          navigation.navigate("MapScreen")}}>
                <Feather name="map-pin" size={24} color="#BDBDBD" />
                <Text style={styles.postLocation}>{fullLocation==="true" ? `${item.region}, ${item.country}`: `${item.country}`}</Text>
            </TouchableOpacity> 
        </View>
    </View>
   
    )
};

const styles = StyleSheet.create({
    image:{
        width: '100%',
        borderRadius: 8,
    },
    postTitle:{
        color: '#212121',
        fontFamily:'RobotoMedium',
        fontSize: 16,
        marginVertical: 8,
        
    },

    infoWrap:{
        flexDirection: 'row',
        marginBottom: 32,
        justifyContent: 'space-between',
    },
    wrapper:{
        flexDirection: 'row',
    },
    commentsWrap:{
        flexDirection: 'row',
      
        
    },
    commentsText:{
        color: '#BDBDBD',
        fontFamily: 'RobotoRegular',
        fontSize: 16,
        marginLeft: 6,
        
    },

    locationWrap:{
        flexDirection: 'row',
   
    },
    postLocation:{
        color: '#212121',
        textDecorationLine: 'underline',
        fontFamily: 'RobotoRegular',
        fontSize: 16,
        marginLeft: 3,
       

    },

    textProfile:{
        color: '#212121',
        fontFamily: 'RobotoRegular',
        fontSize: 16,
        marginLeft: 6,
    },

    icon:{
        color: '#BDBDBD',
    },

    iconProfile:{
        color: '#FF6C00',
    },

    likesWrap:{
        flexDirection: 'row',
        marginLeft: 24,
    },
});

export default Post;