import React from "react";

import { Provider } from "react-redux";
import store from "./store";

import RepositoriesList from "./components/RepositoryList";

import GlobalStyles from "./styles/global";

function App() {
  return (
    <Provider store={store}>
      <>
        <GlobalStyles />
        <RepositoriesList />
      </>
    </Provider>
  );
}

export default App;
