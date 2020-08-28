import React from "react";

import { Provider } from "react-redux";
import store from "./store";

import RepositoriesList from "./components/RepositoryList";

function App() {
  return (
    <Provider store={store}>
      <RepositoriesList />
    </Provider>
  );
}

export default App;
