import { View, Image, Text, StyleSheet } from "react-native";
import { Feather } from '@expo/vector-icons';

const Post = ({item}) =>{
    return (
    
    <View>
        <Image source={item.path} style={styles.image}/>
        <Text style={styles.postTitle}>{item.title}</Text>
        <View style={styles.infoWrap}>
            <View style={styles.commentsWrap}>
                <Feather name="message-circle" size={24} color="#BDBDBD" />
                <Text style={styles.commentsText}>{item.comments}</Text>
            </View>
            <View style={styles.locationWrap}>
                <Feather name="map-pin" size={24} color="#BDBDBD" />
                <Text style={styles.postLocation}>{`${item.region}, ${item.country}`}</Text>
            </View> 
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
       

    }
});

export default Post;