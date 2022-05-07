import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { w, h } from "react-native-responsiveness";

const NextBtn = ({ BtnText, onPress }) => {
  return (
    <TouchableOpacity style={styles.mycont} onPress={onPress}>
      <View style={styles.Appbutton}>
        <Text style={styles.Buttontext}>{BtnText}</Text>
        <Image
          source={require("../../assets/arr2.png")}
          style={styles.imgshow}
        />
      </View>
    </TouchableOpacity>
  );
};

export default NextBtn;
const styles = StyleSheet.create({
  Appbutton: {
    backgroundColor: "#000",
    width: "50%",
    height: h("7.5%"),
    borderRadius: h("100%"),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  mycont: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  Buttontext: {
    color: "white",
    fontWeight: "bold",
    fontSize: h("2%"),
  },
  imgshow: {
    width: "23%",
    height: "27%",
    resizeMode: "contain",
  },
});
