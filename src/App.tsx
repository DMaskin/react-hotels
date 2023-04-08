import React, {useEffect} from 'react';
import {AppRouter} from "./component/AppRouter";
import {BrowserRouter} from "react-router-dom";
import {authSlice} from "./features/auth/authSlice";
import {useAppDispatch} from "./app/hooks";
import {IUser} from "./model";

function App() {
  // const count = useAppSelector(selectCount);
  // const dispatch = useAppDispatch();
  const {setAuth, setUser} = authSlice.actions
  const dispatch = useAppDispatch()

  useEffect(() => {
    const isAuth = localStorage.getItem("auth")
    if (isAuth) {
      dispatch(setAuth(true))
      const email = localStorage.getItem("email")
      dispatch(setUser({email, password: ""} as IUser))
    }
  }, [])

  return (
    <BrowserRouter>
      <AppRouter/>
    </BrowserRouter>
  );
}

export default App;
