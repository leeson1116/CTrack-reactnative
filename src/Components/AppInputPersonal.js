import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { w, h } from "react-native-responsiveness";

const AppInputPersonal = ({ placeholder, name }) => {
  return (
    <>
      <Text style={styles.nameText}>{name}</Text>
      <View style={styles.InputFields}>
        <TextInput style={styles.TextInput} placeholder={placeholder} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  InputFields: {
    width: "100%",
    height: h("7%"),
    backgroundColor: "white",
    marginTop: h("3%"),
    borderRadius: h("1%"),
    borderColor: "#0003",
    borderWidth: h("0.3%"),
  },
  InputText: {
    backgroundColor: "white",
    fontSize: h("2%"),
    fontWeight: "bold",
    width: "35%",
    paddingLeft: h("1%"),
    position: "absolute",
    top: -12,
    left: 20,
    color: "#5C55D0",
  },
  TextInput: {
    // backgroundColor: "red",
    width: "100%",
    height: "100%",
    paddingLeft: h("2%"),
    fontSize: h("2%"),
  },
  nameText: {
    color: "#000",
    fontSize: h("2%"),
    fontWeight: "bold",
    marginBottom: -h("2%"),
    marginTop: h("1%"),
  },
});

export default AppInputPersonal;
