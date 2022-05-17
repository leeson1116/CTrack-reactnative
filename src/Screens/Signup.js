import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
  TextInput,
  Alert
} from "react-native";
import React, { useEffect, useState } from "react";
import { w, h } from "react-native-responsiveness";
import * as api from "../services/auth";


// components
import LoginHeader from "../Components/LoginHeader";
import AppInput from "../Components/AppInput";
import Appinputpassword from "../Components/Appinputpassword";
import AppButton from "../Components/AppButton";
import SocialButton from "../Components/SocialButton";
import { Header, ErrorText } from "../Components/Shared";

const Signup = ({ navigation }) => {

  const [agreement, setAgreement] = useState(false);
  const [error, setError] = useState(null);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('test@gmail.com')
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordC, setPasswordC] = useState('');
  const [isR, setIsR] = useState(false);
  const [VAT, setVAT] = useState('');


  async function onSubmit() {
    setLoading(true);
    try {

      if (isR == true && VAT == '') {
        setError("Please make sure VAT is provided to register as business account")
      } else {

        var stateSubmit
        isR ?
          stateSubmit = {
            "username": username,
            "email": email,
            "password": password,
            "passwordConfirm": passwordC,
            "isRestaurant": isR,
            "VAT": VAT
          } :
          stateSubmit = {
            "username": username,
            "email": email,
            "password": password,
            "passwordConfirm": passwordC,
            "isRestaurant": isR,
          }
        // check if isR is true if true check if VAT exist

        console.log(stateSubmit)


        let response = await api.register(stateSubmit);
        setLoading(false);
        // console.log(response)
        if (response.status == "success") {
          Alert.alert(
            'Registration Successful',
            response.message,
            [{ text: 'OK', onPress: () => navigation.replace("Login") }],
            { cancelable: false },
          );
          navigation.navigate("Login");
        } else {
          setError(response.message)
        }

      }

    } catch (error) {
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
        <Text style={styles.SignIn}>Please Sign Up for your Account</Text>
        <AppInput name={"username"} placeholder={"Username"} onChangeText={setUsername} />
        <Appinputpassword
          name={"Password"}
          placeholder={"Password"}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Appinputpassword
          name={"ConfirmPassword"}
          placeholder={"Confirm Password"}
          onChangeText={setPasswordC}
          secureTextEntry
        />
        {agreement ? (
          <AppInput name={"VAT"} placeholder={"VAT number needed to sign up"} onChangeText={setVAT} />
        ) : (
          <Text></Text>
        )}
        {agreement ? (
          <TouchableOpacity
            onPress={() => {
              setAgreement(!agreement);
              setIsR(!agreement)
            }}
            style={styles.Agreeterms}
          >
            <View style={styles.ViewBox}>
              <Image
                style={styles.ImgBg}
                source={require("../../assets/tick1.png")}
              />
            </View>
            <Text>Signing up as Restaurant ?</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              setAgreement(!agreement);
              setIsR(!agreement)
            }}
            style={styles.Agreeterms}
          >
            <View style={styles.ViewBox}>
              <Image
                style={styles.ImgBg}
                source={require("../../assets/tick2.png")}
              />
            </View>
            <Text>Signing up as restaurant ? </Text>
          </TouchableOpacity>
        )}

        {agreement ? (
          <ErrorText error={error} />
        ) : (

          <View style={styles.space}>
            <ErrorText error={error} style={{ width: "100 %", alignSelf: "center", }} />

          </View >
        )}

        <AppButton BtnText={"Sign Up"} onPress={() => {
          console.log("called")

          onSubmit();
        }} />

        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Text style={styles.SignupText1}>
            Already a member ? <Text style={styles.SignupText}> Sign in</Text>
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
  Agreeterms: {
    flexDirection: "row",
    width: "45%",
    height: "10%",
    // backgroundColor: "red",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  ViewBox: {
    // borderColor: "#635BD6",
    // borderWidth: h("0.3%"),
    width: 30,
    height: 30,
    borderRadius: h("0.5%"),
    justifyContent: "center",
    alignItems: "center",
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
  ImgBg: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});

export default Signup;
