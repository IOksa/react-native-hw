import { View, Image, Text, StyleSheet } from "react-native";
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const UserComment = ({item}) =>{
    const navigation = useNavigation();
    return (
    
    <View>
        <Image source={item.photoUser} style={styles.image}/>
        
        <View style={styles.infoWrap}>
            <Text style={styles.commentsText}>{item.commentText}</Text>
            <Text style={styles.commentsDate}>{item.date}</Text>
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

export default UserComment;