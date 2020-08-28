import { createStore, applyMiddleware, Store } from "redux";
import createSagaMiddleware from "redux-saga";
import { RepositoriesState } from "./modules/repositories/types";

import rootReducer from "./modules/rootReducer";
import rootSaga from "./modules/rootSaga";

export interface ApplicationState {
  repositories: RepositoriesState;
}

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;
