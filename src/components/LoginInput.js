/*
 * @name: 
 * @msg: 
 * @param: 
 * @return: 
 */
import React, { Component } from 'react';
import {
    View,
    TextInput,
    Text,
    StyleSheet,
    Image
} from 'react-native';


export default class LoginInput extends Component {
    render() {
        const { label, placeholder, type, onChange,icon,iconStyle,style ,onBlur,onFocus} = this.props;
        return (
            <View style={[styles.textField,style]}>
                <Text style={styles.label}>{label}</Text>
                <Image style={iconStyle} source={icon} />
                <TextInput
                autoCapitalize='none'
                autoCorrect={false}
                blurOnSubmit={true}
                style={styles.edit}
                placeholder={placeholder}
                placeholderTextColor="#BFBFBF"
                secureTextEntry={type === 'password'}
                keyboardType='default'
                selectTextOnFocus={false}
                onChangeText={onChange}
                onBlur={onBlur}
                onFocus={onFocus}
                />
            </View>
    );
    }
}

const styles = StyleSheet.create({
    textField: {
        height: 40,
        width:279,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'flex-start',
        borderBottomWidth: 1,
        borderBottomColor: '#F7F7F7',
        padding:0
    },
    label: {
        color:'#333333',
        fontSize: 16,
    },
    edit: {
        flex:1,
        color:'#333333',
        fontSize: 16,
        marginLeft:15
    }
});
