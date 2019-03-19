import { all } from "redux-saga/effects";
import { watchFetchCate } from "./global";

export default function* rootSaga() {
  yield all([watchFetchCate()]);
}