import { applyMiddleware } from 'redux';
import { legacy_createStore as createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from '../reducers';
import rootSaga from '../sagas';

const sagaMiddlware = createSagaMiddleware();

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(applyMiddleware(sagaMiddlware)),
);

sagaMiddlware.run(rootSaga);

export default store;
