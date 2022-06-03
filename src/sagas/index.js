import { takeEvery, put, call, fork } from 'redux-saga/effects';

async function swapiGet(pattern) {
  const req = await fetch(`https://swapi.dev/api/${pattern}`);

  const data = await req.json();

  return data.results;
}

export function* loadPeople() {
  const people = yield call(swapiGet, 'people');

  yield put({ type: 'SET_PEOPLE', payload: people });
}

export function* loadPlanets() {
  const planets = yield call(swapiGet, 'planets');

  yield put({ type: 'SET_PLANETS', payload: planets });
}

export function* workerSaga() {
  yield fork(loadPeople);
  yield fork(loadPlanets);
}

export function* watchLoadDataSaga() {
  yield takeEvery('LOAD_DATA', workerSaga);
}

export default function* rootSaga() {
  yield fork(watchLoadDataSaga);
}
