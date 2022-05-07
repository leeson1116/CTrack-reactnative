import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { w, h } from "react-native-responsiveness";
import Ionicons from "@expo/vector-icons/Ionicons";

const MainHeader = ({ HeaderText, onPress }) => {
  return (
    <View style={styles.HeaderContainer}>
      <View style={styles.leaftHeader}>
        <TouchableOpacity onPress={onPress} style={styles.imgBg}>
          <Image style={styles.arr} source={require("../../assets/arr.png")} />
        </TouchableOpacity>
      </View>
      <View style={styles.MiddleHeader}>
        <Text style={styles.HeaderColor}>{HeaderText}</Text>
      </View>
    </View>
  );
};

export default MainHeader;

const styles = StyleSheet.create({
  HeaderContainer: {
    // backgroundColor: "red",
    width: "100%",
    height: h("15%"),
    flexDirection: "row",
  },
  leaftHeader: {
    // backgroundColor: "gold",
    width: "25%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  MiddleHeader: {
    // backgroundColor: "blue",
    width: "65%",
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
  arr: {
    width: "60%",
    height: "60%",
    resizeMode: "contain",
  },
  HeaderColor: {
    color: "#fff",
    fontSize: h("3%"),
    fontWeight: "bold",
  },
});
