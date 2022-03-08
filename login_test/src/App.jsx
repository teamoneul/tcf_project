import "./App.css";
import Login from "./Components/Login";
import Loading from "./Components/Loading";
import React, { useState } from "react";

const App = () => {
  const [loadingState, setLoadingState] = useState(false);

  setTimeout(() => {
    setLoadingState((loadingState) => !loadingState);
  }, 2500);

  return (
    <div className="App">
      {loadingState ? <Login></Login> : <Loading></Loading>}
    </div>
  );
};

export default App;
