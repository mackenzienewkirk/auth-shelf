import { all } from 'redux-saga/effects';
import fetchItems from './item.saga';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import addToListSaga from './addToShelf.saga';
import itemSaga from './item.saga';
import deleteFromListSaga from './deleteFromList.saga';


// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(), // login saga is now registered
    registrationSaga(),
    userSaga(),
    addToListSaga(),

    itemSaga(),
    deleteFromListSaga()

  ]);
}
