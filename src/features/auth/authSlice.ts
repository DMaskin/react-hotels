import {IUser} from "../../model";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface AuthState {
  isAuth: boolean,
  user: IUser,
  error: string
}

const initialState: AuthState = {
  isAuth: false,
  user: {} as IUser,
  error: ""
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<IUser>) {
      state.user = action.payload
    },
    setIsAuth(state, action: PayloadAction<boolean>) {
      state.isAuth = action.payload
    },
    setError(state, action: PayloadAction<string>) {
      state.error = action.payload
    }
  }
})