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

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
    };
  }

  signUpUser = (name,email,password) => {

    firebase.auth().createUserWithEmailAndPassword(email,password)
    .then(authenticate => {
      console.log(authenticate);
      return authenticate.user
        .updateProfile({
          displayName:name
        })
        .then(() => {
          this.props.navigator.navigate("Home");
        })
        .catch((error) => {
          alert(error.message)
        })
    })
    .catch((error) => {
      alert(error.message)
    })

  }
  
  render() {
    console.log("From SignUp page");
    return (
      <KeyboardAvoidingView behavior="position" enabled>
        <View style={styles.logoContainer}>
          <Image source={require("../assets/logo.png")} />
          <Text>CodingStation</Text>
        </View>
        <Form style={styles.form}>
        <Item floatingLabel>
            <Label>Name</Label>
            <Input
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="default"
              onChangeText={(name) => this.setState({ name })}
            />
          </Item>
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
          <Button style={styles.button} onPress={() => {
            this.signUpUser(
              this.state.name,
              this.state.email,
              this.state.password,
            )
          }} full rounded>
            <Text style={styles.buttonText}>Sign Up</Text>
          </Button>
        </Form>
        <View style={styles.footer}>
          <Text> OR </Text>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("Login");
            }}
          >
            <Text>already have an account</Text>
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
