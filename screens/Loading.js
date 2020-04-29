import React, { Component } from "react";
import { StyleSheet, Text, View,ActivityIndicator } from "react-native";
import * as firebase from "firebase";

export default class Loading extends Component {

  UNSAFE_componentWillMount(){
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
    console.log("From Loading Page")
    return (
      
        <View style={styles.container}>
          <ActivityIndicator size="large" />
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
