import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image,StatusBar} from 'react-native';
import {connect} from 'react-redux';
// import DynamicTabNavigator from '../navigator/DynamicTabNavigator'


export default class HomePage extends Component{
    constructor(props){
        super(props)
        console.disableYellowBox = true;
    }
    render(){
        return <view>homepage</view>
    }
}