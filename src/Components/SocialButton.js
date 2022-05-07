import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { w, h } from "react-native-responsiveness";
import Ionicons from "@expo/vector-icons/Ionicons";

const SocialButton = ({ BtnText }) => {
  return (
    <TouchableOpacity style={styles.Appbutton}>
      <Ionicons
        name="logo-google"
        size={h("3%")}
        color="#000"
        style={styles.icon}
      />
      <Text style={styles.Buttontext}>{BtnText}</Text>
    </TouchableOpacity>
  );
};

export default SocialButton;

const styles = StyleSheet.create({
  Appbutton: {
    // backgroundColor: "#000",
    width: w("80%"),
    height: h("7.5%"),
    borderRadius: h("100%"),
    marginTop: h("1%"),
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderColor: "#000",
    borderWidth: h("0.2%"),
  },
  Buttontext: {
    color: "#000",
    fontWeight: "bold",
    fontSize: h("2%"),
  },
  icon: {
    marginRight: h("1%"),
  },
});
