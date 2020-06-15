import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Button } from "native-base";
import * as firebase from "firebase";

export default class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      name:"",
      email:""
    }
  }

  componentDidMount(){
    firebase.auth().onAuthStateChanged(authenticate => {
      console.log(authenticate);
      if(authenticate){
        this.setState({
          email: authenticate.email,
          name: authenticate.displayName,
        })
      }else{
        this.props.navigation.navigate("Login");
      }
    })
  }

  signOut = () => {
    firebase.auth().signOut()
    .then( () => console.log("signout"))
    .catch(error => alert (error.message))
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={require("../assets/logo.png")} />
          <Text>CodingStation</Text>
        </View>
        <View style={styles.userDetails}>
          <Text>Hello {this.state.name}</Text>
          <Text>Your Email-id is : {this.state.email}</Text>
        </View>
        <Button style={styles.button} onPress={() => {this.signOut()}} full rounded success>
          <Text style={styles.buttonText}>Sign Out</Text>
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 20,
    marginVertical: 20,
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 100,
    marginBottom: 100,
  },
  userDetails: {
    justifyContent:"center",
    alignItems:"center"
  },

  button: {
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
  },
});
