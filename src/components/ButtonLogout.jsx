import {TouchableOpacity, StyleSheet} from "react-native";
import { Feather } from '@expo/vector-icons';

const ButtonLogout = ()=>(
    <TouchableOpacity  >
      <Feather name="log-out" size={24} color="#BDBDBD" />
    </TouchableOpacity>

)

const styles = StyleSheet.create({

  });
  
  export default ButtonLogout;