import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* deleteSaga(){
    console.log('Deleted account is:');
    try{
        yield axios.delete(`/api/user/${id}`);
    } catch(error){
        console.log('Error in delete saga', error);
    }
    yield put({ type: 'DELETE_USER' });
}

function* deleteWatcherSaga() {
    yield takeEvery('DELETE_ACCOUNT', deleteSaga);
}

export default deleteWatcherSaga;