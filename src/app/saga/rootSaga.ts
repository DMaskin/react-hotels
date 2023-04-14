import { all } from 'redux-saga/effects'
import {loginWatcher, logoutWatcher} from "./authSaga";
import {routinePromiseWatcherSaga} from "redux-saga-routines";

export default function* rootSaga() {
  yield all([
    loginWatcher(),
    logoutWatcher(),
    routinePromiseWatcherSaga
  ])
}