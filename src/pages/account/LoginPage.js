import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image,StatusBar} from 'react-native';
import {connect} from 'react-redux';




class LoginPage extends Component {

  constructor(props) {
    super(props);
    console.disableYellowBox = true;
  }
  
  render() {
    return (
        
          <Text>LoginPage</Text>
        
        
    );
  }
}




const mapStateToProps = state => ({
  nav:state.nav
});


export default connect(mapStateToProps)(LoginPage);



