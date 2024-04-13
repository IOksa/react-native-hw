import { createAsyncThunk } from '@reduxjs/toolkit';
import { 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    updateProfile,
    signOut
} from 'firebase/auth';
import { auth,  db  } from '../../../config';
import { collection, addDoc } from "firebase/firestore";

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    console.log("register")
    console.log("credentials=", credentials)
    try {
      const { login, email, password, photoUser = '' } = credentials;
      console.log('registerOperation, credentials', credentials);
      console.log("auth=", auth)
      await createUserWithEmailAndPassword(auth, email, password);
      
      const user = auth.currentUser;
      console.log("user=", user);
      // якщо такий користувач знайдений
      if (user) {
        try{
          await updateProfile(user, {
            displayName: login,
            photoURL: photoUser,
          });
        }catch(error){
          return thunkAPI.rejectWithValue(error.message);
        }
      }
      console.log("user after update=", user);
      // writeDataToFirestore(login, email, password, photoUser = '');
      const data = {
        uid: user.uid,
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
      };
      console.log("data=", data);
      return data;
    
    }catch (error) {
      console.log("error=", error)
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const { email, password} = credentials;
      console.log("logIn credentials=", credentials);
      const {user} = await signInWithEmailAndPassword(auth, email, password);
      console.log("logIn user=", user);
      const data = {
        uid: user.uid,
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
      };
      console.log("logIn", data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await signOut(auth);
    console.log("logOut");
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// const authStateChanged = async (onChange = () => {}) => {
//         onAuthStateChanged((user) => {
//                 onChange(user);
//         });
// };


const writeDataToFirestore = async (login, email, password, photoUser) => {
        try {
          const docRef = await addDoc(collection(db, 'users'), {
            login,
            email,
            password,
            photoUser
          });
          console.log('Document written with ID: ', docRef.id);
        } catch (e) {
          console.error('Error adding document: ', e);
            throw e;
        }
  };


  //test123 - password