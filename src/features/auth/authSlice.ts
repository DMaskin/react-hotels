import {IUser} from "../../model";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {login, logout} from "./authAPI";
import { createRoutine } from 'redux-saga-routines'

export interface AuthState {
  isAuth: boolean,
  user: IUser,
  error: string,
  isLoading: boolean
}

const initialState: AuthState = {
  isAuth: false,
  user: {} as IUser,
  error: "",
  isLoading: false
}

export const loginAsync = createAsyncThunk(
  "auth/login",
  async (credentials: { email: string, password: string }) => {
    return await login(credentials)
  }
)

export const logoutAsync = createAsyncThunk(
  "auth/logout",
  async () => await logout()
)

export const loginRoutine = createRoutine("login")
export const logoutRoutine = createRoutine("logout")

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload
    },
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload
    },
  },
  extraReducers: {
    [loginRoutine.SUCCESS]: (state, action: PayloadAction<{email: string, password: string}>) => {
      authSlice.caseReducers.setUser(state, action)
      authSlice.caseReducers.setAuth(state, {...action, payload: true})
    },
    [logoutRoutine.SUCCESS]: (state, action) => {
      authSlice.caseReducers.setUser(state, {...action, payload: {} as IUser})
      authSlice.caseReducers.setAuth(state, {...action, payload: false})
    },
    [loginRoutine.FULFILL]: () => {},
    [logoutRoutine.FULFILL]: () => {},
  }
})

export default authSlice.reducer