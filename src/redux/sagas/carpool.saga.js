import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// fetch carpools
function* fetchCarpools () {
    try{
        const response = yield axios.get('/api/carpool');
        console.log('response.data is:', response.data);
        yield put({ type: 'SET_CARPOOL', payload: response.data});
    }catch (error) {
        console.log('Carpool GET request failed', error);
    }
}

function* carpoolSaga() {
    yield takeLatest('FETCH_CARPOOLS', fetchCarpools);
}

export default carpoolSaga;