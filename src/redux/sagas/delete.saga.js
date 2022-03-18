import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* deleteSaga(){
    console.log('action delete payload is:', action.payload);
    try{
        yield axios.delete(`/api/user/${action.payload}`);
    } catch(error){
        console.log('Error in delete saga', error);
    }
    yield put({ type: 'UNSET_USER' });
}

function* deleteWatcherSaga() {
    yield takeEvery('DELETE_ACCOUNT', deleteSaga);
}

export default deleteWatcherSaga;