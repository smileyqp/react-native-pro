import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image,StatusBar} from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import LocalstorageUtil from '../../utils/LocalstorageUtil';
import NavigationUtil from '../../navigator/NavigationUtil';

import {connect} from 'react-redux';



class WelcomePage extends Component {

  constructor(props) {
    super(props);
    console.disableYellowBox = true;//是否出现错误提示框
  }
  componentDidMount() {
    this.timer = setTimeout(() => {
        //go to homepage
        // NavigationUtil.resetToHomePage(this.props);
        // NavigationUtil.resetToLoginPage();
        LocalstorageUtil.getValue('username');
    },1000)
}

componentWillMount() {
    //页面销毁时，清空计时器
    this.timer && clearTimeout(this.timer);
}

  
  render() {
    NavigationUtil.navSave = this.props.navigation;
    return (
      <LinearGradient
        useAngle={true}
        // angle={-69}
        start={{x: 0, y: 0}} end={{x: 1, y: 1}}
        angleCenter={{x:0,y:0}}
        colors={['#5992F8','#5D67EB']}
        style={styles.container}>
        <StatusBar hidden={true} />
        <View style={styles.container}>
          <Text style={styles.text}>welcome to React Native</Text>
          <Text style={styles.text}>by Smileyqp</Text>

        </View>

      </LinearGradient>
    );
  }
}




const mapStateToProps = state => ({
  nav:state.nav
});


export default connect(mapStateToProps)(WelcomePage);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    color: '#FFFFFF',
  },
})


