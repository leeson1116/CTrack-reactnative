import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { w, h } from "react-native-responsiveness";
const TextViewComp = ({ title, subtitle }) => {
  return (
    <View style={styles.textView}>
      <Text style={styles.heading}>{title}</Text>
      <Text style={styles.subheading}>{subtitle}</Text>
    </View>
  );
};

export default TextViewComp;

const styles = StyleSheet.create({
  textView: {
    width: "100%",
    borderRadius: h("2%"),
    height: h("10%"),
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "column",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  heading: {
    width: "92%",
    fontSize: h("2.5%"),
    fontWeight: "bold",
  },
  subheading: {
    width: "92%",
    fontSize: h("2%"),
    color: "#77838F",
  },
});
