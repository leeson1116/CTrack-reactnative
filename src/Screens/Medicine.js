import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { w, h } from "react-native-responsiveness";
import Ionicons from "@expo/vector-icons/Ionicons";

import MainHeader from "../Components/MainHeader";
import AppButton from "../Components/AppButton";

const Medicine = ({ navigation, route }) => {
  console.log(route.params.name);
  return (
    <ImageBackground
      style={styles.imgbg}
      source={require("../../assets/lp.png")}
    >
      <MainHeader
        onPress={() => {
          navigation.goBack();
        }}
        HeaderText={route.params.name}
      />
      <View style={styles.TopCOntainer}>
        {/* top img */}
        <View style={styles.ImgeContainer}>
          <Image
            style={styles.Img}
            source={require("./../../assets/vacImg.png")}
          />
        </View>
        {/* top img */}

        {/* description */}
        <View style={styles.DesText}>
          <Text style={styles.DesText2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>
        </View>
        {/* description */}

        {/* box1 */}
        <View style={styles.Box1}>
          <View style={styles.leftBox}>
            <Text style={styles.leftBoxVrc}>Dosage amount</Text>
            <Text style={styles.leftBoxVrc2}>2x (0,5 ml/dose)</Text>
          </View>
          <View style={styles.leftBox}>
            <Text style={styles.leftBoxVrc}>Vaccine efficacy</Text>
            <Text style={styles.leftBoxVrc2}>75.20%</Text>
          </View>
        </View>
        {/* box1 */}

        {/* box2 */}
        <View style={styles.Box2}>
          <View style={styles.topBox2}>
            <Text style={styles.SideText}>Side Effect</Text>
          </View>
          <View style={styles.BottomBox2}>
            <View style={styles.one}>
              {/* illness */}
              <View style={styles.TopBar}>
                <View style={styles.dot} />
                <Text style={styles.TopSubText}>Headcache</Text>
              </View>
              {/* illness */}
              <View style={styles.TopBar}>
                <View style={styles.dot} />
                <Text style={styles.TopSubText}>Muscle ache</Text>
              </View>
              {/* illness */}
            </View>
            <View style={styles.two}>
              {/* illness */}
              <View style={styles.TopBar}>
                <View style={styles.dot} />
                <Text style={styles.TopSubText}>Fatigue</Text>
              </View>
              {/* illness */}
              <View style={styles.TopBar}>
                <View style={styles.dot} />
                <Text style={styles.TopSubText}>Fever</Text>
              </View>
              {/* illness */}
            </View>
            <View style={styles.three}>
              {/* illness */}
              <View style={styles.TopBar}>
                <View style={styles.dot} />
                <Text style={styles.TopSubText}>Nouseous</Text>
              </View>
            </View>
          </View>
        </View>
        {/* box1 */}

        {/* button1 */}
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("BookingScreen");
          }}
          style={styles.Appbutton}
        >
          <Text style={styles.Buttontext}>Get vaccinated</Text>
        </TouchableOpacity>
        {/* button1 */}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imgbg: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
  TopCOntainer: {
    backgroundColor: "white",
    width: "90%",
    height: h("80%"),
    alignSelf: "center",
    borderRadius: h("2%"),
    paddingTop: h("0.5%"),
  },
  ImgeContainer: {
    backgroundColor: "white",
    width: "98%",
    height: "34%",
    alignSelf: "center",
    borderTopRightRadius: h("2%"),
    borderTopLeftRadius: h("2%"),
    overflow: "hidden",
  },
  Img: {
    width: "100%",
    height: "100%",
    // resizeMode: "contain",
  },
  DesText: {
    width: "90%",
    // backgroundColor: "red",
    height: "20%",
    alignSelf: "center",
    paddingTop: h("1%"),
  },
  DesText2: {
    color: "#0003",
    fontSize: h("1.9%"),
  },
  Box1: {
    // backgroundColor: "red",
    width: "90%",
    height: "15%",
    alignSelf: "center",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
  },
  Box2: {
    backgroundColor: "rgba(223, 45, 45, 0.1)",
    width: "83%",
    height: "18%",
    alignSelf: "center",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderColor: "rgba(223, 45, 45, 0.5)",
    borderWidth: h("0.2%"),
    borderRadius: h("2%"),
    marginTop: h("0.5%"),
  },
  leftBox: {
    // backgroundColor: "green",
    width: "45%",
    height: "90%",
    borderRadius: h("1%"),
    borderColor: "#0003",
    borderWidth: h("0.3%"),
    justifyContent: "center",
    paddingLeft: h("2%"),
    // alignItems: "center",
  },
  leftBoxVrc: {
    color: "#000",
    fontSize: h("2%"),
    fontWeight: "bold",
  },
  leftBoxVrc2: {
    color: "#0004",
    fontSize: h("2%"),
  },
  topBox2: {
    width: "100%",
    height: "30%",
    // backgroundColor: "orange",
    paddingLeft: h("2%"),
    justifyContent: "center",
  },
  BottomBox2: {
    width: "100%",
    height: "70%",
    // backgroundColor: "orange",/
    flexDirection: "row",
  },
  one: {
    width: "38%",
    height: "100%",
    // backgroundColor: "green",
    // justifyContent: "center",
    paddingLeft: h("1%"),
  },
  two: {
    width: "25%",
    height: "100%",
    // backgroundColor: "green",
  },
  three: {
    width: "33%",
    height: "100%",
    // backgroundColor: "gold",
  },
  SideText: {
    color: "black",
    fontSize: h("2%"),
    fontWeight: "bold",
  },
  TopBar: {
    width: "100%",
    height: "30%",
    // backgroundColor: "red",
    flexDirection: "row",
    alignItems: "center",
    marginTop: h("1%"),
  },
  dot: {
    backgroundColor: "#0003",
    width: 10,
    height: 10,
    borderRadius: 1000 / 2,
    marginRight: h("0.5%"),
  },
  TopSubText: {
    color: "#0008",
    fontSize: h("1.8%"),
  },
  Appbutton: {
    backgroundColor: "#000",
    width: "90%",
    height: "8%",
    borderRadius: h("100%"),
    marginTop: h("2%"),
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "center",
  },
  Buttontext: {
    color: "white",
    fontWeight: "bold",
    fontSize: h("2%"),
  },
});

export default Medicine;
