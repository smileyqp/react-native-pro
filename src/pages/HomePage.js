import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image,StatusBar,SafeAreaView} from 'react-native';
import {connect} from 'react-redux';
import LinearGradient from "react-native-linear-gradient";

// import DynamicTabNavigator from '../navigator/DynamicTabNavigator'

const statusBarHeight = StatusBar.currentHeight;
const HEADER_HEIGHT = Platform.OS === 'ios' ? 40:40+statusBarHeight;

export default class HomePage extends Component{
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
                    <View style={styles.topCon}>
                        <LinearGradient
                            useAngle={true}
                            // angle={-69}
                            start={{x: 0, y: 0}} end={{x: 1, y: 1}}
                            angleCenter={{x:0,y:0}}
                            colors={['#5992F8','#5D67EB']}
                            style={styles.header}>
                        </LinearGradient>
                        <View style={styles.decorateOne}>

                        </View>
                    </View>
                    
               <Text>homepage</Text>
            </SafeAreaView>
        );
         
        
    }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        
    },
    topCon:{
        height:140+HEADER_HEIGHT,
        // backgroundColor:'yellow',
        borderColor:'red',
        borderWidth:1,
        position:'relative'
    },
    header:{
        height: HEADER_HEIGHT,
        // backgroundColor: 'linear-gradient(-69deg, #5992F8, #5D67EB)',
        backgroundColor:'pink',
        // boxshadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.2)',
        borderRadius: 3,
        shadowColor:'0px 0px 10px 0px rgba(0, 0, 0, 0.2)',
    },
    decorateOne:{
        width:100,
        height:100,
        backgroundColor:'rgba(251, 149, 80, 0.07)',
        transform: [{rotate:'45deg'}],
        position:'absolute',
        left:10,
        top:'40%'
    }
})