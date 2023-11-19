import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, updateUserProfile } from './operations';

const initialState = {
  name:"",
  email:"" ,
  avatar: "",
 //token: null,
  isLoggedIn: false,
  // isRefreshing: false,

  error: null,
  isLoading: false,
};

const handlePending =(state)=>{
  console.log('handlePending state=', state);
  state.isLoading = true;
};

const handleFulfilled =(state, action)=>{
  console.log('handleFulfilled action.payload=', action.payload);
  const {displayName, email, photoURL}=action.payload;
  state.name=displayName;
  state.email = email;
  state.avatar=photoURL;
  //state.token = action.payload.token;
  state.isLoggedIn = true;

  state.error = null;
  state.isLoading = false;
  console.log("fullfild, state", state);
};

const handleRejected=(state, action)=>{
  state.error=action.payload;
  state.isLoading = false;
}
const handleLogOutFulfilled = (state)=>{
    state.name = "";
    state.email="";
    state.avatar="";

   // state.token = null;
    state.isLoggedIn = false;
    console.log("handleLogOutFulfilled state=", state)
};

// const handleRefreshUserPending=(state)=>{
//     state.isRefreshing = true;
// };

// const handleRefreshUserFulfilled = (state, action)=>{
//     state.user = action.payload;
//     state.isLoggedIn = true;
//     state.isRefreshing = false;
// };

// const handleRefreshUserRejected = (state)=>{
//     state.isRefreshing = false;
// }

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearError(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
    // .addCase(register.pending, handlePending)
    .addCase(register.fulfilled, handleFulfilled)
    .addCase(register.rejected, handleRejected)
    // .addCase(logIn.pending, handlePending)
    .addCase(logIn.fulfilled, handleFulfilled)
    .addCase(logIn.rejected, handleRejected)
    .addCase(logOut.fulfilled, handleLogOutFulfilled)
    // .addCase(updateUserProfile.pending, handleRefreshUserPending)
    // .addCase(updateUserProfile.fulfilled, handleRefreshUserFulfilled)
    // .addCase(updateUserProfile.rejected, handleRefreshUserRejected)
  },
});
console.log('authSlice', authSlice);
export const { clearError } = authSlice.actions;
export const authReducer = authSlice.reducer;