/*
 * @name: 
 * @msg: 
 * @param: 
 * @return: 
 */ 
import React, { Component } from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View
} from 'react-native';
import {CommonColors} from '../styles/CommonColors';

class DefaultButton extends Component {
    render() {
        const { children, onPress,style,textStyle } = this.props;
        return (
            <TouchableOpacity
            onPress={onPress}
            >
                <View style={[styles.buttonBox,style]}>
                <Text style={[styles.buttonText,textStyle]}>{children}</Text>
                </View>
            </TouchableOpacity>
    );
    }
}

const styles = StyleSheet.create({
    buttonBox:{
        backgroundColor:CommonColors.ThemeColor,
        width:281,
        height:40,
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize:18,
        fontWeight:'bold'        
    }
});

export default DefaultButton;
