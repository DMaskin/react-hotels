import { call, put, takeLatest } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { login, logout } from "../auth/authAPI";
import { loginRoutine, logoutRoutine } from "../auth/authSlice";
import { NavigateFunction } from "react-router-dom";
import { RouteNames } from "../../route";

function* loginWorker(
  action: PayloadAction<{
    data: { email: string; password: string };
    navigate: NavigateFunction;
  }>
) {
  const { success, fulfill } = loginRoutine;

  try {
    const { email, password } = action.payload.data;
    const { navigate } = action.payload;
    const { _email, _password } = yield call(login, { email, password });
    yield put(success({ _email, _password }));
    yield call(() => navigate(RouteNames.HOTELS));
  } catch (e) {
    console.error(e);
  } finally {
    yield put(fulfill());
  }
}

function* logoutWorker(action: PayloadAction<{ navigate: NavigateFunction }>) {
  const { success, fulfill } = logoutRoutine;

  try {
    const { navigate } = action.payload;
    yield call(logout);
    yield put(success());
    yield call(() => navigate(RouteNames.LOGIN));
  } catch (e) {
    console.error(e);
  } finally {
    yield put(fulfill());
  }
}

export function* loginWatcher() {
  yield takeLatest(loginRoutine.TRIGGER, loginWorker);
}

export function* logoutWatcher() {
  yield takeLatest(logoutRoutine.TRIGGER, logoutWorker);
}

