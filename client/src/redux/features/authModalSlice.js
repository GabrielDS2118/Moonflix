import { createSlice } from '@reduxjs/toolkit';

export const authModalSlice = createSlice({
  name: 'AuthModal',
  initialState: {
    authModalOpen: false,
  },

  reducers: {
    setModalOpen: (state, action) => {
      state.authModalOpen = action.payload;
    },
  },
});

export const { setModalOpen } = authModalSlice.actions;
export default authModalSlice.reducer;
