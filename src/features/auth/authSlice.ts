import {IUser} from "../../model";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {login, logout} from "./authAPI";

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
    const {email, password} = credentials
    return await login(email, password)
  }
)

export const logoutAsync = createAsyncThunk(
  "auth/logout",
  async () => await logout()
)

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.isLoading = true
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.user = action.payload
        state.isAuth = true
        state.isLoading = false
      })
      .addCase(loginAsync.rejected, (state) => {
        state.isLoading = false
      })
      .addCase(logoutAsync.pending, (state) => {
        state.isLoading = true
      })
      .addCase(logoutAsync.fulfilled, (state) => {
        state.user = {} as IUser
        state.isAuth = false
        state.isLoading = false
      })
      .addCase(logoutAsync.rejected, (state) => {
        state.isLoading = false
      })
  }
})

export default authSlice.reducer