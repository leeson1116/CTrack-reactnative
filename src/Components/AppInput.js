import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { w, h } from "react-native-responsiveness";

const AppInput = ({ name, placeholder, secureTextEntry, value, onChangeText }) => {
  return (
    <View style={styles.InputFields}>
      <Text style={styles.InputText}>{name}</Text>
      <TextInput
        style={styles.TextInput}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChangeText}
        autoCapitalize='none'
      />
    </View>
  );
};

export default AppInput;

const styles = StyleSheet.create({
  InputFields: {
    width: "90%",
    height: h("8%"),
    backgroundColor: "white",
    marginTop: h("3%"),
    borderRadius: h("1%"),
    borderColor: "#5C55D0",
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
});
