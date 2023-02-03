import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* deleteFromList(action) {
    const itemToDelete = action.payload;
    console.log('id we are deleting:', itemToDelete)
    const response = yield axios({
        method: 'DELETE',
        url: `/api/shelf/${itemToDelete}`
    })
    yield put({
        type: 'FETCH_ITEM'
    })
}

function* deleteFromListSaga() {
    yield takeLatest('SAGA/DELETE_FROM_LIST', deleteFromList);
}

export default deleteFromListSaga;