import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NewReleasesReducer } from './types';

const initialState: NewReleasesReducer = {
  id: '',
  image: '',
  title: '',
};

const newReleasesSlice = createSlice({
  name: 'newReleases',
  initialState,
  reducers: {
    setNewReleases: (state, action: PayloadAction<NewReleasesReducer>) => {
      state.id = action.payload.id;
      state.title = action.payload.title;
      state.image = action.payload.image;
    },
  },
});

export const { setNewReleases } = newReleasesSlice.actions;

export default newReleasesSlice.reducer;
