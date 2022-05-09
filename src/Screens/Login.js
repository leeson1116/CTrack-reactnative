import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { w, h } from "react-native-responsiveness";
import * as api from "../services/auth";
import { useAuth } from "../providers/auth";

// components
import LoginHeader from "../Components/LoginHeader";
import AppInput from "../Components/AppInput";
import Appinputpassword from "../Components/Appinputpassword";
import AppButton from "../Components/AppButton";
import SocialButton from "../Components/SocialButton";

import CTA from "../Components/CTA";
import { Header, ErrorText } from "../Components/Shared";

const Login = ({ navigation }) => {

  const { navigate } = navigation;

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { handleLogin } = useAuth();

  const fields = [
    { name: 'email', label: 'Email Address', required: true },
    { name: 'password', label: 'Password', required: true, secure: true }
  ];

  const res = {
    'username': username,
    'password': password
  }


  async function onSubmit(state) {

    setLoading(true);
    try {
      let response = await api.login(state);
      // console.log(response)

      // console.log(response.status)
      if (response.status === "success") {
        await handleLogin(response.result);

        setLoading(false);
        // check if user is at the right route 
        navigation.navigate("Dashboard");
      } else {
        // console.log(response)
        setError(response.error[0].message);
      }

      // //check if username is null
      // let username = (response.result.user.username !== null);
      // if (username) navigate('App');
      // else navigation.replace('Username');
    } catch (error) {
      console.log(error)
      setError(error.message);
      setLoading(false)
    }
  }

  return (
    <ImageBackground
      style={styles.imgbg}
      source={require("../../assets/lp.png")}
    >
      <LoginHeader />
      <View style={styles.LoginPage}>
        <Text style={styles.HellowText}>Hello Again!</Text>
        <Text style={styles.SignIn}>Please Sign in to your Account</Text>
        <AppInput name={"Email"} placeholder={"Email"} onChangeText={setUsername} />
        <Appinputpassword
          name={"Password"}
          placeholder={"Password"}
          onChangeText={setPassword}
          secureTextEntry
        />
        <ErrorText error={error} />
        <TouchableOpacity style={styles.ForgetPass}>
          <Text style={styles.Forgettext}>Forgot your password?</Text>
        </TouchableOpacity>
        <View style={styles.space} />
        <AppButton
          BtnText={"Sign in"}
          onPress={() => {
            console.log(res)
            onSubmit(res);
            // navigation.navigate("Dashboard");
          }}
        />
        {/* <SocialButton BtnText={"Sign in with Google"} /> */}
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Signup");
          }}
        >
          <Text style={styles.SignupText1}>
            Don’t have an Account?{" "}
            <Text style={styles.SignupText}> Sign Up</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imgbg: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
  LoginPage: {
    backgroundColor: "white",
    width: "95%",
    height: h("80%"),
    alignSelf: "center",
    borderRadius: h("2%"),
    alignItems: "center",
    paddingTop: h("2%"),
  },
  HellowText: {
    color: "black",
    fontWeight: "bold",
    fontSize: h("6%"),
  },
  SignIn: {
    color: "#0004",
    fontSize: h("2%"),
  },
  Forgettext: {
    color: "#5C55D0",
    fontSize: h("2.2%"),
    fontWeight: "bold",
    alignSelf: "flex-end",
    marginRight: h("2.1%"),
    marginTop: h("1%"),
  },
  space: {
    width: "100%",
    height: h("12%"),
    // backgroundColor: "red",
  },
  SignupText1: {
    color: "black",
    fontSize: h("2%"),
    marginTop: h("1.5%"),
  },
  SignupText: {
    color: "#5C55D0",
    fontSize: h("2%"),
    marginTop: h("1%"),
    fontWeight: "bold",
    paddingLeft: h("1%"),
  },
  ForgetPass: {
    alignSelf: "flex-end",
  },
});

export default Login;
