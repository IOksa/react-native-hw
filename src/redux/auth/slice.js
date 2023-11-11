import { createSlice } from '@reduxjs/toolkit';
import { registerDB, loginDB, logOut, updateUserProfile } from './operations';

const initialState = {
  user: { name: null, email: null },
 //token: null,
  isLoggedIn: false,
  isRefreshing: false,

  error: null,
  isLoading: false,
};

const handlePending =(state)=>{
  state.isLoading = true;
};

const handleFulfilled =(state, action)=>{
    state.user = action.payload.user;
    //state.token = action.payload.token;
    state.isLoggedIn = true;

    state.error = null;
    state.isLoading = false;
};

const handleRejected=(state, action)=>{
  state.error=action.payload;
  state.isLoading = false;
}
const handleLogOutFulfilled = (state)=>{
    state.user = { name: null, email: null };
   // state.token = null;
    state.isLoggedIn = false;
};

const handleRefreshUserPending=(state)=>{
    state.isRefreshing = true;
};

const handleRefreshUserFulfilled = (state, action)=>{
    state.user = action.payload;
    state.isLoggedIn = true;
    state.isRefreshing = false;
};

const handleRefreshUserRejected = (state)=>{
    state.isRefreshing = false;
}

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
    .addCase(registerDB.pending, handlePending)
    .addCase(registerDB.fulfilled, handleFulfilled)
    .addCase(registerDB.rejected, handleRejected)
    .addCase(loginDB.pending, handlePending)
    .addCase(loginDB.fulfilled, handleFulfilled)
    .addCase(loginDB.rejected, handleRejected)
    .addCase(logOut.fulfilled, handleLogOutFulfilled)
    .addCase(updateUserProfile.pending, handleRefreshUserPending)
    .addCase(updateUserProfile.fulfilled, handleRefreshUserFulfilled)
    .addCase(updateUserProfile.rejected, handleRefreshUserRejected)
  },
});

export const { clearError } = authSlice.actions;
export const authReducer = authSlice.reducer;