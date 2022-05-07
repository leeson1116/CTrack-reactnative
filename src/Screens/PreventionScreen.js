import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React from "react";
import PreventionHeader from "../Components/PreventionHeader";
import { MaterialIcons } from "@expo/vector-icons";
import { w, h } from "react-native-responsiveness";
import PreventionComp from "../Components/PreventionComp";
import TextViewComp from "../Components/TextViewComp";
const PreventionScreen = () => {
  return (
    <SafeAreaView style={styles.filldiv}>
      <ImageBackground
        style={styles.bgshow}
        source={require("../../assets/lp.png")}
      >
        <PreventionHeader />
        <View style={styles.headering}>
          <Text style={styles.coivdtxt}>Covid - 19</Text>
          <View style={styles.minibtn}>
            <Text style={{ color: "#5952D0" }}>USA</Text>
            <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
          </View>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.coivdtxt1}>Are you feeling sick</Text>
          <Text style={styles.coivdtxt2}>
            Curabitur tempor ipsum turpis, ut pharetra magna varius in. Fusce ac
            sem a massa aliquet porttitor.
          </Text>
        </View>
        <View style={styles.btnCont}>
          <TouchableOpacity style={{ ...styles.mybTn, backgroundColor: "red" }}>
            <MaterialIcons name="call" size={24} color="white" />
            <Text style={{ ...styles.myBtnTxt, color: "white" }}>Call Now</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ ...styles.mybTn, backgroundColor: "white" }}
          >
            <MaterialIcons name="map" size={24} color="#5952D0" />
            <Text style={{ ...styles.myBtnTxt, color: "#5952D0" }}>
              Show Map
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.persciptiondiv}>
          <Text
            style={{ width: "100%", fontSize: h("3%"), fontWeight: "bold" }}
          >
            Prevention
          </Text>
          <PreventionComp />
          <TextViewComp
            title={"Do your own test!"}
            subtitle={
              "Curabitur tempor ipsum turpis, ut pharetra magna varius."
            }
          />
          <TextViewComp
            title={"Protect yourself!"}
            subtitle={
              "Curabitur tempor ipsum turpis, ut pharetra magna varius."
            }
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default PreventionScreen;

const styles = StyleSheet.create({
  filldiv: {
    width: "100%",
    height: "100%",
  },
  bgshow: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  headering: {
    width: "100%",
    height: h("5%"),
    display: "flex",
    paddingHorizontal: w("7%"),
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  btnCont: {
    width: "100%",
    height: h("5%"),
    display: "flex",
    paddingHorizontal: w("7%"),
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: h("2%"),
  },
  textContainer: {
    paddingHorizontal: w("7%"),
    width: "100%",
    marginVertical: h("2%"),
  },
  coivdtxt: {
    fontSize: h("4%"),
    fontWeight: "700",
    color: "white",
  },
  coivdtxt1: {
    fontSize: h("2.5%"),
    fontWeight: "700",
    color: "white",
    marginBottom: h("1%"),
  },
  coivdtxt2: {
    fontSize: h("2%"),
    color: "white",
  },
  mybTn: {
    width: "47%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderRadius: h("3%"),
  },
  minibtn: {
    width: w("20%"),
    height: "90%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: h("2%"),
  },
  persciptiondiv: {
    width: "100%",
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: h("6%"),
    borderTopRightRadius: h("6%"),
    paddingHorizontal: h("1.5%"),
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "column",
  },
  myBtnTxt: {
    fontSize: h("2.2%"),
    marginLeft: h("0.5%"),
  },
});
