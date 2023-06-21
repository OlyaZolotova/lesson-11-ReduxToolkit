import { createSlice } from "@reduxjs/toolkit";
import { AnyAction, combineReducers } from "redux";

const cashDefaultState = {
  cash: 0,
};

export const cashSlice = createSlice({
  name: 'cash',
  initialState: cashDefaultState,

  reducers: {
     addCash: (state, action) => {
      state.cash += action.payload
    },
    getCash: (state, action) => {
      state.cash -= action.payload
    },
  },
})

export const cashReducer = cashSlice.reducer
export const {addCash, getCash} = cashSlice.actions

const nickDefaultState = {
  username: "nickname",
};

export const nickSlice = createSlice({
  name: 'username',
  initialState: nickDefaultState,

  reducers: {
    changeNick: (state, action) => {

      state.username = action.payload
    },
  },
})

export const nickReducer = nickSlice.reducer
export const { changeNick } = nickSlice.actions

const usersDefaultState = {
  users: [],
};

export const usersSlice = createSlice({
  name: 'users',
  initialState: usersDefaultState,

  reducers: {
    addUsers: (state, action) => {
      state.users = state.users.push(action.payload)
    },
    removeUsers: (state, action) => {

      state.users = state.users.filter((user: string) => user !== action.payload)
    },
  },
})

export const usersReducer = usersSlice.reducer
export const { addUsers, removeUsers } = usersSlice.actions


export const rootReducer = combineReducers({
  cash: cashReducer,
  nick: nickReducer,
  users: usersReducer,
});
