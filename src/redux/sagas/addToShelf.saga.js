import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* addToList(action) {
    console.log(action.payload);
    const newDescription = action.payload.description;
    const newUrl = action.payload.url;
    const response = yield axios({
        method: 'POST',
        url: `/api/shelf`,
        data: {
            description: newDescription,
            url: newUrl
        }
    })
    yield put({
        type: 'FETCH_ITEM',
        payload: response.data
    })
}

function* addToListSaga() {
    yield takeLatest('SAGA/ADD_TO_SHELF', addToList);
}

export default addToListSaga;