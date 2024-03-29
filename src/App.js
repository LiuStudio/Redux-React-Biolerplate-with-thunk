import React from "react";
import Posts from "./components/Posts";
import Postform from "./components/Postform";

import "./App.css";

import { Provider } from "react-redux";
import store from "./store";


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Postform />
        <Posts />
      </div>
    </Provider>
  );
}

export default App;
