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
import request from '../utils/request';

import NavigationUtil from "../navigator/NavigationUtil";


export function* logIn ({username, password,callback}) {
   
}

export function* getcapthaImage ({callback}) {
    console.log('来到了capcha')
    let getURL = '/captchaImage';
    try{
        const data = yield call(request,getURL,{
            method:'get'
        })
        console.log(data)
        if(callback) callback(data);
    }catch(error){
        console.log(error);
    }
}




export function* watchLogin () {
    yield takeLatest('LOGIN_REQUEST', logIn);
}

export function* watchGetCaptchaImg () {
    yield takeLatest('LOGIN_CAPTCHAIMG', getcapthaImage);
}

