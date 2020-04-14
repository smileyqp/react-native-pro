import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image,StatusBar} from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import {connect} from 'react-redux';




class WelcomePage extends Component {

  constructor(props) {
    super(props);
    console.disableYellowBox = true;//是否出现错误提示框
  }
  
  
  render() {
    return (
      <LinearGradient
          useAngle={true}
          angle={-45}
          angleCenter={{x:0,y:0}}
          colors={['#FF6666','#FF6600']}
          style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.text}>welcome to smileyqp</Text>
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


