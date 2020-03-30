import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image,StatusBar} from 'react-native';
import {connect} from 'react-redux';



class WelcomePage extends Component {

  constructor(props) {
    super(props);
    console.disableYellowBox = true;//是否出现错误提示框
  }
  
  render() {
    return (
    <View style={styles.container}>
      <Text style={styles.text}>smileyqp</Text>
    </View>
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
    backgroundColor:'pink'
  }
})


