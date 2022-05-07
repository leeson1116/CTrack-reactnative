import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { w, h } from "react-native-responsiveness";
const DosageSelector = ({ selected, onPress }) => {
  return (
    <View style={styles.mainConat}>
      <TouchableOpacity
        style={{
          ...styles.miniConti,
          borderColor: selected === 1 ? "#5952D0" : "#eeeeee",
        }}
        onPress={() => onPress(1)}
      >
        <Text style={styles.mainHeading}>1st doses sinovac</Text>
        <Text style={styles.mainHeading2}>60 doses remaining</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          ...styles.miniConti,
          borderColor: selected === 2 ? "#5952D0" : "#eeeeee",
        }}
        onPress={() => onPress(2)}
      >
        <Text style={styles.mainHeading}>2nd doses sinovac</Text>
        <Text style={styles.mainHeading2}>40 doses remaining</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DosageSelector;

const styles = StyleSheet.create({
  miniConti: {
    width: "47%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "column",
    borderRadius: h("2%"),
    borderWidth: h("0.3%"),
  },
  mainConat: {
    width: w("92%"),
    height: h("10%"),
    display: "flex",
    justifyContent: "space-evenly",
    flexDirection: "row",
    alignSelf: "center",
    marginBottom: h("1.5%"),
    overflow: "hidden",
  },
  mainHeading: {
    fontSize: h("2%"),
    fontWeight: "bold",
    width: "87%",
  },
  mainHeading2: {
    fontSize: h("1.8%"),
    color: "#919191",
    width: "87%",
  },
  learnMorebtn: {
    width: "87%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
  },
  btntxt: {
    fontSize: h("1.7%"),
    color: "#5952D0",
    marginRight: 5,
  },
});
