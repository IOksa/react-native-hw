import { View, Image, Text, StyleSheet } from "react-native";
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const UserComment = ({item}) =>{
    const navigation = useNavigation();
    console.log("item=", item);

    return (
    
    <View style={styles.container}>
        <Image source={item.photoUser} style={styles.image}/>
        
        <View style={styles.infoWrap}>
            <Text style={styles.commentText}>{item.commentText}</Text>
            <Text style={styles.commentDate}>{item.date}</Text>
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
   
    
});

export default UserComment;