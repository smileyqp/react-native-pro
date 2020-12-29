import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, NativeModules,StatusBar,SafeAreaView,Dimensions} from 'react-native';
import {connect} from 'react-redux';
import LinearGradient from "react-native-linear-gradient";

// import DynamicTabNavigator from '../navigator/DynamicTabNavigator'

// const statusBarHeight = StatusBar.currentHeight;
const { StatusBarManager } = NativeModules;
let statusBarHeight;
	if (Platform.OS === "ios") {
        StatusBarManager.getHeight(height => {
            statusBarHeight = height;
        });
	} else {
	    statusBarHeight = StatusBar.currentHeight;
}
 

export default class WarnPage extends Component{
    constructor(props){
        super(props)
        console.disableYellowBox = true;
    }
    render(){
        return  (
            <SafeAreaView style={{flex:1,backgroundColor:'#fff'}}>
                <StatusBar
                barStyle={'dark-content'} //两个参数 dark-content 和 light-content,请根据实际情况设置
                translucent
                backgroundColor="rgba(0, 0, 0, 0)"
                />
                    
            </SafeAreaView>
        );
         
        
    }
}


const styles = StyleSheet.create({
   
})