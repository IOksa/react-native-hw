// Для роботи із firebase обовʼязково треба ініціалізувати проект
import { initializeApp } from 'firebase/app';
// Функція для підключення авторизації в проект
import { getAuth } from "firebase/auth";
// Функція для підключення бази даних у проект
import { getFirestore } from "firebase/firestore";
// Функція для підключення сховища файлів в проект
import { getStorage } from "firebase/storage";

import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';


//дает Firebase после добавления web app
const firebaseConfig = {
    apiKey: "AIzaSyCVtg44oZQDZuslrAb0im7kp8_Yo8bdsj8",
    authDomain: "react-native-app-82752.firebaseapp.com",
    projectId: "react-native-app-82752",
    storageBucket: "react-native-app-82752.appspot.com",
    messagingSenderId: "925521406944",
    appId: "1:925521406944:web:192310f072d01184205985",
    measurementId: "G-GNVT63J3BQ"
};

const app = initializeApp(firebaseConfig);

// export const auth = getAuth(app);

export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
  });


export const db = getFirestore(app);
export const storage = getStorage(app);