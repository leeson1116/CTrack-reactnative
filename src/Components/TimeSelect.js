import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { w, h } from "react-native-responsiveness";
const TimeSelect = ({ selected, onPress }) => {
  return (
    <View style={styles.mainConat}>
      <TouchableOpacity
        style={{
          ...styles.miniConti,
          borderColor: selected === "10:00AM" ? "#5952D0" : "#eeeeee",
        }}
        onPress={() => onPress("10:00AM")}
      >
        <Text
          style={{
            ...styles.mainHeading,
            color: selected === "10:00AM" ? "#5952D0" : "#919191",
          }}
        >
          10:00AM
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          ...styles.miniConti,
          borderColor: selected === "11:00AM" ? "#5952D0" : "#eeeeee",
        }}
        onPress={() => onPress("11:00AM")}
      >
        <Text
          style={{
            ...styles.mainHeading,
            color: selected === "11:00AM" ? "#5952D0" : "#919191",
          }}
        >
          11:00AM
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          ...styles.miniConti,
          borderColor: selected === "01:00PM" ? "#5952D0" : "#eeeeee",
        }}
        onPress={() => onPress("01:00PM")}
      >
        <Text
          style={{
            ...styles.mainHeading,
            color: selected === "01:00PM" ? "#5952D0" : "#919191",
          }}
        >
          01:00PM
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default TimeSelect;

const styles = StyleSheet.create({
  miniConti: {
    width: "30%",
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
    height: h("7%"),
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
