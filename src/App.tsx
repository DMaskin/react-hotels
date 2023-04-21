import React, { useEffect } from "react";
import { AppRouter } from "./component/AppRouter";
import { BrowserRouter } from "react-router-dom";
import { setAuth, setUser } from "./features/auth/authSlice";
import { useAppDispatch } from "./app/hooks";
import { IUser } from "./model";
import { checkAuth } from "./features/auth/authAPI";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const { isAuth, email } = checkAuth();
    dispatch(setAuth(isAuth));
    dispatch(setUser({ email, password: "" } as IUser));
  }, []);

  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
