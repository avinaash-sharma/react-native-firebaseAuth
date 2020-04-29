import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as firebase from "firebase";

export default class Login extends Component {
  componentDidMount(){
    firebase.auth().onAuthStateChanged((authenticate) =>{
      if(authenticate){
        this.props.navigation.replace("Home");
      }
      else{
        this.props.navigation.replace("SignUp");
      }
    })
  }
  render() {
    return (
        <View style={styles.container}>
          <Text>Login</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
