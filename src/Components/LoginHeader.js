import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { w, h } from "react-native-responsiveness";
import Ionicons from "@expo/vector-icons/Ionicons";

const LoginHeader = () => {
  return (
    <View style={styles.HeaderContainer}>
      <View style={styles.leaftHeader}>
        <TouchableOpacity style={styles.imgBg}>
          <Ionicons name="close-outline" size={h("5%")} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginHeader;

const styles = StyleSheet.create({
  HeaderContainer: {
    // backgroundColor: "red",
    width: "100%",
    height: h("15%"),
  },
  leaftHeader: {
    // backgroundColor: "red",
    width: "25%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  imgBg: {
    backgroundColor: "#fff6",
    width: 55,
    height: 55,
    borderRadius: h("2%"),
    justifyContent: "center",
    alignItems: "center",
  },
});
