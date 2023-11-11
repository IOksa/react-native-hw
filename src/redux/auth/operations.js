import { createAsyncThunk } from '@reduxjs/toolkit';
import { 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    // onAuthStateChanged,
    // updateProfile,
    // signOut
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
      writeDataToFirestore(login, email, password, photoUser = '');

      
    } catch (error) {
      console.log("error=", error)
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


// const registerDB = async ({ email, password }) => {
//   try {
//     console.log("registerDB");
//   //   await createUserWithEmailAndPassword(auth, email, password);
//   } catch (error) {
//     throw error;
//   }
// };


// const authStateChanged = async (onChange = () => {}) => {
//         onAuthStateChanged((user) => {
//                 onChange(user);
//         });
// };

// const loginDB = async ({ email, password }) => {
//   try {
//     const credentials = await signInWithEmailAndPassword(auth, email, password);
//         return credentials.user;
//   } catch (error) {
//     throw error;
//   }
// };

// const updateUserProfile = async (update) => {

//   const user = auth.currentUser;

//   // якщо такий користувач знайдений
//   if (user) {

//   // оновлюємо його профайл
//         try {
//             await updateProfile(user, update);
//         } catch(error) {
//             throw error
//         }
//   }
// };


// const logOut=async()=>{
//   try {
//     await signOut(auth);
//   } catch(error){
//     throw error
//   }
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