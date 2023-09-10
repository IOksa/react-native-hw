import { View, Image, Text, StyleSheet } from "react-native";
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import {userLogin} from '../data/constants';

const UserComment = ({item}) =>{
    const navigation = useNavigation();

    return (
    
    <View style={[styles.container, item.userId===userLogin && styles.containerUser]}>
        <Image source={item.photoUser} style={[styles.image, item.userId===userLogin && styles.imageUser]}/>
        
        <View style={[styles.infoWrap, item.userId===userLogin && styles.infoWrapUser ]}>
            <Text style={styles.commentText}>{item.commentText}</Text>
            <Text style={[styles.commentDate, item.userId===userLogin && styles.commentDateUser]}>{item.date}</Text>
        </View>
  
    </View>
   
    )
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'row',
        gap: 16,
        marginBottom: 24,
    },
    
    containerUser:{
        flexDirection: 'row-reverse',
    },
    image:{
        width: 28,
        borderRadius: 50,
    },
    
    infoWrap:{
       backgroundColor: 'rgba(0, 0, 0, 0.03)',
       borderTopLeftRadius: 0,
       borderTopRightRadius: 6,
       borderBottomLeftRadius: 6,
       borderBottomRightRadius: 6,
       paddingHorizontal: 16,
       paddingVertical: 16,
       flex:1,
   },
 
   infoWrapUser:{
    borderTopLeftRadius: 6,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
},
  
    commentText:{
        color: '#212121',
        fontFamily: 'RobotoRegular',
        fontSize: 13,
        marginBottom: 8, 
    },

    commentDate:{
        color: '#BDBDBD',
        fontFamily: 'RobotoRegular',
        fontSize: 10,
        textAlign: 'right',
      
    },
    commentDateUser:{
        textAlign: 'left',
    }
    
});

export default UserComment;