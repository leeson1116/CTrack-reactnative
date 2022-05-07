import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { w, h } from "react-native-responsiveness";

const AppButton = ({ BtnText, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.Appbutton}>
      <Text style={styles.Buttontext}>{BtnText}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  Appbutton: {
    backgroundColor: "#000",
    width: w("80%"),
    height: h("7.5%"),
    borderRadius: h("100%"),
    marginTop: h("2%"),
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  Buttontext: {
    color: "white",
    fontWeight: "bold",
    fontSize: h("2%"),
  },
});
