import { configureStore } from '@reduxjs/toolkit';

import categoriesReducer from 'features/categories/reducer';
import featuredPlaylistsReducer from 'features/featuredPlaylists/reducer';
import newReleasesReducer from 'features/newReleases/reducer';

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    featuredPlaylists: featuredPlaylistsReducer,
    newReleases: newReleasesReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
