import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* editShelfInfo(action) {
    console.log(action.payload);

    const newDescription = action.payload.description;
    const newUrl = action.payload.image_url;
    const response = yield axios({
        method: 'PUT',
        url: `/api/shelf/${action.payload.id}`,
        data: {
            id: action.payload.id,
            description: newDescription,
            image_url: newUrl
        }
    })
}

function* editInfo() {
    yield takeLatest('SAGA_UPDATE_SHELF', editShelfInfo);
}

export default editInfo;