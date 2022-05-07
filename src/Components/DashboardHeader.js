import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { w, h } from "react-native-responsiveness";
import Ionicons from "@expo/vector-icons/Ionicons";

const DashboardHeader = ({ onPress }) => {
  return (
    <View style={styles.HeaderContainer}>
      <View style={styles.leaftHeader}>
        <TouchableOpacity style={styles.imgBg2} onPress={
          onPress
        }>
          <Image
            style={styles.img}
            source={require("../../assets/lifesaver.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.leaftHeader}>
        <TouchableOpacity style={styles.imgBg}>
          <Ionicons name="notifications" size={h("4%")} color="#5C55D0" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DashboardHeader;

const styles = StyleSheet.create({
  HeaderContainer: {
    width: "100%",
    height: h("10%"),
    // backgroundColor: "gold",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  leaftHeader: {
    // backgroundColor: "red",
    width: "25%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  imgBg: {
    backgroundColor: "rgba(99, 91, 214, 0.1)",
    width: 55,
    height: 55,
    borderRadius: h("2%"),
    justifyContent: "center",
    alignItems: "center",
  },
  imgBg2: {
    // backgroundColor: "#fff6",
    width: 55,
    height: 55,
    borderRadius: h("2%"),
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: "100%",
    height: "100%",
  },
});
