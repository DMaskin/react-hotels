import React, {useEffect} from 'react';
import {AppRouter} from "./component/AppRouter";
import {BrowserRouter} from "react-router-dom";
import {authSlice} from "./features/auth/authSlice";
import {useAppDispatch} from "./app/hooks";
import {IUser} from "./model";
import {authCheck} from "./features/auth/authAPI";

function App() {
  const {setAuth, setUser} = authSlice.actions
  const dispatch = useAppDispatch()

  useEffect(() => {
    const {isAuth, email} = authCheck()
    dispatch(setAuth(isAuth))
    dispatch(setUser({email, password: ""} as IUser))
  }, [])

  return (
    <BrowserRouter>
      <AppRouter/>
    </BrowserRouter>
  );
}

export default App;
