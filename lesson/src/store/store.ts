// import { createStore } from "redux";
// import { rootReducer } from "./reducers";

// export const store = createStore(rootReducer);

import { configureStore } from '@reduxjs/toolkit'

import { cashReducer, usersReducer, nickReducer } from './reducers'

export const store = configureStore({
   reducer: {
      cash:cashReducer,
      nick: nickReducer,
      users: usersReducer,
   },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch