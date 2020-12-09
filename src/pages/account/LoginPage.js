import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar,Image} from 'react-native';
import {connect} from 'react-redux';
import LoginInput from '../../components/LoginInput';
import userIcon from '../../assets/user.png';
import pwIcon from '../../assets/password.png';
import DefaultButton from '../../components/DefaultButton'


class LoginPage extends Component {

  constructor(props) {
    super(props);
    console.disableYellowBox = true;
    this.state = {
      username:'',
      password:''
    };
  }
  login(){}
  
  render() {
    return (
        <View style={styles.container}>
              
          <StatusBar
            barStyle={'dark-content'} //两个参数 dark-content 和 light-content,请根据实际情况设置
            translucent
            backgroundColor="rgba(0, 0, 0, 0)"
            />
                <Image style={styles.logoStyle} source={require("../../assets/logo.png")} />

              <LoginInput
                style={styles.inputStyle}
                icon={userIcon}
                iconStyle={styles.userIconStyle}
                placeholder='请输入用户名'
                onChange={value => this.setState({ username: value})}
                />
                <LoginInput
                style={styles.inputStyle}
                icon={pwIcon}
                iconStyle={styles.pwIconStyle}
                type='password'
                placeholder='请输入登录密码'
                onChange={value => this.setState({ password: value})}
                />
                <DefaultButton onPress={this.login} style={styles.btnStyle}>登录</DefaultButton>

        </View>
        
        
    );
  }
}




const mapStateToProps = state => ({
  nav:state.nav
});


export default connect(mapStateToProps)(LoginPage);




const styles = StyleSheet.create({
  container:{
      flex:1,
      backgroundColor:'#fff',
      alignItems:'center'
  },
  logoStyle:{
      width:100,
      height:100,
      marginTop:100
  },
  userIconStyle:{
      width:11,
      height:12
  },
  pwIconStyle:{
      width:9,
      height:12
  },
  inputStyle:{
      marginTop:30
  },
  btnStyle:{
      marginTop:30
  },
  txtBtnContainer:{
      width:281,
      flexDirection:'row',
      justifyContent:"flex-end",
      marginTop:26
  },
  btnText:{
      color:'#8A8A8A'
  }
})