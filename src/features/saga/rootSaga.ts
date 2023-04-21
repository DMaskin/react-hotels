import { all } from "redux-saga/effects";
import { loginWatcher, logoutWatcher } from "./authSaga";
import { fetchHotelsWatcher } from "./hotelSaga";

export default function* rootSaga() {
  yield all([loginWatcher(), logoutWatcher(), fetchHotelsWatcher()]);
}