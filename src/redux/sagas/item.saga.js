import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchItems() {
    try {
        // const config = {
        //     headers: { 'Content-Type': 'application/json' },
        //     withCredentials: true,
        // };

        const response = yield axios.get('/api/shelf');

        yield put({ type: 'SET_ITEM', payload: response.data });
    } catch (error) {
        console.log('could not find', error);
    }
}

function* itemSaga() {
    yield takeLatest('FETCH_ITEM', fetchItems);
}

export default itemSaga; 