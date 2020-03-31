
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator,
    createAppContainer} from 'react-navigation';
import ErrorPage from '../pages/error/ErrorPage';
import UsualcomponentsPage from '../pages/usualcomponents/UsualcomponentsPage';
import OfficialPage from '../pages/official/OfficialPage';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import NavigationUtil from "./NavigationUtil";



const TABS = {
        OfficialPage: {
            screen: OfficialPage,
            navigationOptions: {
                tabBarLabel:"官方组件",
                tabBarIcon:({tintColor,focused})=>(
                    <FontAwesome
                        name={'map'}
                        size={26}
                        style={{color: tintColor}}
                    />
                )
            }
        },
        UsualcomponentsPage: {
            screen: UsualcomponentsPage,
            navigationOptions: {
                tabBarLabel:"常用组件",
                tabBarIcon:({tintColor,focused})=>(
                    <FontAwesome
                        name={'car'}
                        size={26}
                        style={{color: tintColor}}
                    />
                )
            }
        },
        ErrorPage: {
            screen: ErrorPage,
            navigationOptions: {
                tabBarLabel:"常见error",
                tabBarIcon:({tintColor,focused})=>(
                    <FontAwesome
                        name={'info-circle'}
                        size={26}
                        style={{color: tintColor}}
                    />
                )
            }
        },
        // TaskPage: {
        //     screen: TaskPage,
        //     navigationOptions: {
        //         tabBarLabel:"任务",
        //         tabBarIcon:({tintColor,focused})=>(
        //             <FontAwesome
        //                 name={'tasks'}
        //                 size={26}
        //                 style={{color: tintColor}}
        //             />
        //         )
        //     }
        // },
        // UserPage: {
        //     screen: UserPage,
        //     navigationOptions: {
        //         tabBarLabel:"个人",
        //         tabBarIcon:({tintColor,focused})=>(
        //             <FontAwesome
        //                 name={'user'}
        //                 size={26}
        //                 style={{color: tintColor}}
        //             />
        //         )
        //     }
        // }
    }


export default class DynamicTabNavigator extends Component {
    constructor(props) {
        super(props);
        console.disableYellowBox = true;
    }
    _tabNavigator (){
        const {OfficialPage,UsualcomponentsPage,ErrorPage} = TABS;
        const tabs = {OfficialPage,UsualcomponentsPage,ErrorPage};
        OfficialPage.navigationOptions.tabBarLabel= '官方组件';//动态配置tab属性
        return createAppContainer(createBottomTabNavigator(tabs,{
            lazy:true,
            animationEnabled:false,
            initialRouteName:'OfficialPage',
            tabBarOptions:{
                tabStyle:{minWidth:50,marginTop:5},
                upperCaseLabel:false,
                scrollEnabled:false,
                labelStyle:{
                    fontSize:12
                }
            }
        }));
    }

    render() {
        // NavigationUtil.navigation = this.props.navigation;
        const Tab = this._tabNavigator();
        return <Tab/>
    }
}

