import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CategoriesReducer } from './types';

const initialState: CategoriesReducer = {
  id: '',
  image: '',
  title: '',
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setCategories: (state, action: PayloadAction<CategoriesReducer>) => {
      state.id = action.payload.id;
      state.title = action.payload.title;
      state.image = action.payload.image;
    },
  },
});

export const { setCategories } = categoriesSlice.actions;

export default categoriesSlice.reducer;
