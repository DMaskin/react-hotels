import {configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import authReducer from "../features/auth/authSlice";
import hotelsReducer from "../features/hotel/hotelSlice";
import rootSaga from "../features/saga/rootSaga";

const saga = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    auth: authReducer,
    hotels: hotelsReducer,
  },
  middleware: [saga],
});

saga.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;