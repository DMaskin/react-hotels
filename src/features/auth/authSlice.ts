import { IUser } from "../../model"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { createRoutine } from "redux-saga-routines"
import { RootState } from "../../app/store"

export interface AuthState {
  isAuth: boolean
  user: IUser
  error: string
  isLoading: boolean
}

const initialState: AuthState = {
  isAuth: false,
  user: {} as IUser,
  error: "",
  isLoading: false,
}

export const loginRoutine = createRoutine("auth/login")
export const logoutRoutine = createRoutine("auth/logout")

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
    [loginRoutine.SUCCESS]: (state, action: PayloadAction<{ email: string; password: string }>) => {
      authSlice.caseReducers.setUser(state, action)
      authSlice.caseReducers.setAuth(state, { ...action, payload: true })
    },
    [logoutRoutine.SUCCESS]: (state, action) => {
      authSlice.caseReducers.setUser(state, {
        ...action,
        payload: {} as IUser,
      })
      authSlice.caseReducers.setAuth(state, { ...action, payload: false })
    },
    [loginRoutine.FULFILL]: () => {},
    [logoutRoutine.FULFILL]: () => {},
  },
})

export const { setAuth, setUser } = authSlice.actions

export const selectIsAuth = (state: RootState) => state.auth.isAuth
export const selectUser = (state: RootState) => state.auth.user
export const selectError = (state: RootState) => state.auth.error
export const selectIsLoading = (state: RootState) => state.auth.isLoading

export default authSlice.reducer
