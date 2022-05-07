import { StyleSheet, Text, View, ImageBackground } from "react-native";
import React, { useEffect } from "react";
import { w, h } from "react-native-responsiveness";

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Onboard");
    }, 3000);
  }, []);

  return (
    <ImageBackground
      style={styles.imgbg}
      source={require("../../assets/ss1.png")}
    ></ImageBackground>
  );
};

export default Splash;

const styles = StyleSheet.create({
  imgbg: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
});
