import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { w, h } from "react-native-responsiveness";
const PreventionComp = () => {
  return (
    <View style={styles.mainDiv}>
      <View style={styles.previem}>
        <View style={styles.imgview}></View>
        <Text style={styles.textview}>Wear a facemask</Text>
      </View>
      <View style={styles.previem}>
        <View style={styles.imgview}></View>
        <Text style={styles.textview}>Avoid close contact</Text>
      </View>
      <View style={styles.previem}>
        <View style={styles.imgview}></View>
        <Text style={styles.textview}>Clean your hands often</Text>
      </View>
    </View>
  );
};

export default PreventionComp;

const styles = StyleSheet.create({
  mainDiv: {
    width: "100%",
    height: h("18%"),
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
    overflow: "hidden",
  },
  previem: {
    width: "27%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "column",
  },
  imgview: {
    width: "100%",
    height: h("10%"),
    borderRadius: h("1%"),
    borderWidth: 1,
    borderColor: "#eeeeee",
    backgroundColor: "#979797",
  },
  textview: {
    width: "97%",
    alignSelf: "center",
    textAlign: "center",
    color: "#1E2022",
  },
});
