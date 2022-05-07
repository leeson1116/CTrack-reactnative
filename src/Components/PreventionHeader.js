import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { w, h } from "react-native-responsiveness";
import Ionicons from "@expo/vector-icons/Ionicons";

const PreventionHeader = () => {
  return (
    <View style={styles.HeaderContainer}>
      <View style={styles.leaftHeader}>
        <TouchableOpacity style={styles.imgBg}>
          <Ionicons name="list" size={h("4%")} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.leaftHeader}>
        <TouchableOpacity style={styles.imgBg}>
          <Ionicons name="notifications-outline" size={h("4%")} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PreventionHeader;

const styles = StyleSheet.create({
  HeaderContainer: {
    // backgroundColor: "red",
    width: "100%",
    height: h("15%"),
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  leaftHeader: {
    // backgroundColor: "red",
    width: "25%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  imgBg: {
    backgroundColor: "#ffffff",
    width: h("6%"),
    height: h("6%"),
    borderRadius: h("2%"),
    justifyContent: "center",
    alignItems: "center",
  },
});
