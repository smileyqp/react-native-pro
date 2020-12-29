/**
 * @Descripttion:对网络请求 axios进行简单封装
 * 统一处理错误
 * @Author: ren UDI
 */
import axios from 'axios';
// import AsyncStorage from '@react-native-community/async-storage';
// import NavigationUtil from '../navigator/NavigationUtil';
// import Toast from '../com/Toast';

// axios.defaults.baseURL = 'http://47.112.135.212:8082';
// axios.defaults.baseURL = 'http://120.78.66.145:8080';
axios.defaults.baseURL = 'http://222.132.28.218:8006/prod-api/';
// axios.defaults.baseURL = 'http://192.168.17.11:8080';
axios.defaults.withCredentials = true;
axios.defaults.timeout = 100000;

//请求拦截处理
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

//返回拦截处理
axios.interceptors.response.use(function (response) {
	// 对响应数据做点什么
	console.log("=======响应数据=====",response);
	// Toast.add(response.data.Message);
    return response;
}, function (error) {
	// 对响应错误做点什么
	console.log("=======响应错误=====",error.response);
	// Toast.add(error.response.data.Message); //请求错误Message弹窗提示
	
	if(error.response.status === 401) { //401 用户未登录，跳转到登陆页面
		// NavigationUtil.goToLoginPage();
		// AsyncStorage.removeItem('username');
		// AsyncStorage.removeItem('password');
	}

	

	return Promise.reject(error);
});

// export default axios;
export default function request(path,options) {
	if(options.body !== undefined) {
		return axios({
			method:options.method,
			url:path,
			data:options.body
		})
	} else {
		return axios({
			method:options.method,
			url:path,
		})
	}
}