import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Image,
  TouchableOpacity,
} from "react-native";
import * as firebase from "firebase";
import { Item, Label, Form, Input, Button, alert } from "native-base";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  signIn =(email,password)=> {
    firebase.auth()
    .signInWithEmailAndPassword(email,password)
    .then(() => {
      this.props.navigation.navigate("Home");
    })
    .catch( error => {
      alert(error.message)
    })
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="position" enabled>
        <View style={styles.logoContainer}>
          <Image source={require("../assets/logo.png")} />
          <Text>CodingStation</Text>
        </View>
        <Form style={styles.form}>
          <Item floatingLabel>
            <Label>Email</Label>
            <Input
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="email-address"
              onChangeText={(email) => this.setState({ email })}
            />
          </Item>
          <Item floatingLabel>
            <Label>Password</Label>
            <Input
              secureTextEntry={true}
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={(password) => this.setState({ password })}
            />
          </Item>
          <Button style={styles.button} onPress={() => {this.signIn(this.state.email,this.state.password)}} full rounded>
            <Text style={styles.buttonText}>Sign in</Text>
          </Button>
        </Form>
        <View style={styles.footer}>
          <Text> OR </Text>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("SignUp");
            }}
          >
            <Text>Create a new Account?</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 100,
    marginBottom: 100,
  },
  form: {
    padding: 20,
    width: "100%",
    marginBottom: 30,
  },
  button: {
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
  },
  footer: {
    alignItems: "center",
  },
});
