import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* deleteSaga(action){
    console.log('Deleted account is:');
    try{
      yield axios.delete(`/api/user/${action.payload.id}`);
      // yield put({ type: 'DELETE_USER' });
      yield put ({ type: 'LOGOUT'});
    } catch(error){
      console.log('Error in delete saga', error);
    } 
  }

function* deleteWatcherSaga() {
    yield takeEvery('DELETE_ACCOUNT', deleteSaga);
}

export default deleteWatcherSaga;