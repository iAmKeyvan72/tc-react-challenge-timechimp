import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { FeaturedPlaylistsReducer } from './types';

const initialState: FeaturedPlaylistsReducer = {
  id: '',
  image: '',
  title: '',
};

const featuredPlaylistsSlice = createSlice({
  name: 'featuredPlaylists',
  initialState,
  reducers: {
    setFeaturedPlaylists: (
      state,
      action: PayloadAction<FeaturedPlaylistsReducer>
    ) => {
      state.id = action.payload.id;
      state.title = action.payload.title;
      state.image = action.payload.image;
    },
  },
});

export const { setFeaturedPlaylists } = featuredPlaylistsSlice.actions;

export default featuredPlaylistsSlice.reducer;
