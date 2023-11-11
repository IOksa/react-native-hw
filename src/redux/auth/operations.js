import { 
    createUserWithEmailAndPassword,
    // signInWithEmailAndPassword,
    // onAuthStateChanged,
    // updateProfile,
    // signOut
} from 'firebase/auth';
import { auth } from '../../../config';

const registerDB = async ({ email, password }) => {
  try {
    console.log("registerDB");
  //   await createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    throw error;
  }
};


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

 
