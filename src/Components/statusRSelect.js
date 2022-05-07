import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { w, h } from "react-native-responsiveness";
const StatusRSelect = ({ selected, onPress }) => {
    return (
        <View style={styles.mainConat}>
            <TouchableOpacity
                style={{
                    ...styles.miniConti,
                    borderColor: selected === "safe" ? "#5952D0" : "#eeeeee",
                }}
                onPress={() => onPress("safe")}
            >
                <Text
                    style={{
                        ...styles.mainHeading,
                        color: selected === "safe" ? "#5952D0" : "#919191",
                    }}
                >
                    Safe
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{
                    ...styles.miniConti,
                    borderColor: selected === "effected" ? "#5952D0" : "#eeeeee",
                }}
                onPress={() => onPress("effected")}
            >
                <Text
                    style={{
                        ...styles.mainHeading,
                        color: selected === "effected" ? "#5952D0" : "#919191",
                    }}
                >
                    Effected
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{
                    ...styles.miniConti,
                    borderColor: selected === "resolved" ? "#5952D0" : "#eeeeee",
                }}
                onPress={() => onPress("resolved")}
            >
                <Text
                    style={{
                        ...styles.mainHeading,
                        color: selected === "resolved" ? "#5952D0" : "#919191",
                    }}
                >
                    Resolved
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default StatusRSelect;

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
