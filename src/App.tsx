import React from 'react';
import {AppRouter} from "./component/AppRouter";
import {BrowserRouter} from "react-router-dom";

function App() {
  // const count = useAppSelector(selectCount);
  // const dispatch = useAppDispatch();

  return (
    <BrowserRouter>
      <AppRouter/>
    </BrowserRouter>
  );
}

export default App;
