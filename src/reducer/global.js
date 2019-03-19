import * as Api from '../api';
import { takeLatest, put, call } from 'redux-saga/effects';

function* fetchCategories() {
  const { data } = yield call(Api.getCategories);
  yield put({ type: 'GET_CATEGORIES', payload: data });
}

export function* watchFetchCate() {
  yield takeLatest('fetchCategory', fetchCategories);
}

const defaultState = {
  flag: true
};

export default (state = defaultState, { type, payload = {} }) => {
  switch (type) {
    case 'changeLayoutCollapsed':
      return {
        ...state,
        flag: payload
      };

    default:
      return state;
  }
};
