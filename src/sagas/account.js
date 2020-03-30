import {
    take,
    fork,
    takeLatest,
    put,
    call,
    select,
    cancel,
    cancelled
} from 'redux-saga/effects';
import NavigationUtil from "../navigator/NavigationUtil";


export function* logIn ({username, password,callback}) {
   
}






export function* watchLogin () {
    yield takeLatest('LOGIN_REQUEST', logIn);
}


