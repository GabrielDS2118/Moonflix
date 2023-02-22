import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'User',
  initialState: {
    user: null,
    listFavorities: [],
  },

  reducers: {
    setUser: (state, action) => {
      if (action.payload === null) {
        localStorage.removeItem('actkn');
      } else {
        if (action.payload.token)
          localStorage.setItem('actkn', action.payload.token);
      }

      state.user = action.payload;
    },

    setListFavorities: (state, action) => {
      state.listFavorities = action.payload;
    },

    removeFavorite: (state, action) => {
      const { mediaId } = action.payload;
      state.listFavorities = [...state.listFavorities].filter(
        (e) => e.mediaId.toString() !== mediaId.toString()
      );
    },

    addFavorite: (state, action) => {
      state.listFavorities = [action.payload, ...state.listFavorities];
    },
  },
});

export const { setUser, setListFavorities, addFavorite, removeFavorite } =
  userSlice.actions;

export default userSlice.reducer;
