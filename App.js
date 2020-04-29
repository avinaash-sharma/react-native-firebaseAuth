import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as firebase from "firebase";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home";
import Loading from "./screens/Loading";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";

var firebaseConfig = {
  apiKey: "AIzaSyDp4rR91EM6_6l5BZaC7yxjYA5j-lkRNa8",
  authDomain: "react-native-firstone.firebaseapp.com",
  databaseURL: "https://react-native-firstone.firebaseio.com",
  projectId: "react-native-firstone",
  storageBucket: "react-native-firstone.appspot.com",
  messagingSenderId: "231504472920",
  appId: "1:231504472920:web:4ec7ca0b32bdac0a51932d",
  measurementId: "G-NPJBRF9GCL",
};

//to get the app initialize with firebase.
firebase.initializeApp(firebaseConfig);

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Loading"
        >
        
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Loading" component={Loading} options={{
            showLabel: false
          }}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
