import { createSlice } from '@reduxjs/toolkit';

export const authModalSlice = createSlice({
  name: 'AuthModal',
  initialState: {
    authModelOpen: false,
  },

  reducers: {
    setModalOpen: (state, action) => {
      state.authModelOpen = action.payload;
    },
  },
});

export const { setModalOpen } = authModalSlice.actions;
export default authModalSlice.reducer;
