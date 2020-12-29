import {watchLogin,watchGetCaptchaImg} from './account'

import {fork,all} from "redux-saga/effects";


export default function* rootSaga() {
  yield all([   
    watchLogin(),
    watchGetCaptchaImg()
  ]);
}








