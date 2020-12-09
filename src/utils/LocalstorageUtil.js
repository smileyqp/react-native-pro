import AsyncStorage from '@react-native-community/async-storage';
import NavigationUtil from '../navigator/NavigationUtil';

/**
 * 本地存储类
 */
export default class LocalstorageUtil {
    static doSave(key,value){
        AsyncStorage.setItem(key, value, error => {
            error && console.log(error.toString());
        });
    }
    static doRemove(key){
        AsyncStorage.removeItem(key,error => {
            error && console.log(error.toString());
        });
    }
    static getValue(key){
        AsyncStorage.getItem(key, (error, value) => {
            console.log("=====loacalStorage====",value)
            if(value == null){
                NavigationUtil.goToLoginPage()
            }else{
                NavigationUtil.goToHomePage();
            }
            error && console.log(error.toString());
        });
    }
}
