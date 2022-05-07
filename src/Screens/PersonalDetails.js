import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import { w, h } from "react-native-responsiveness";
import Ionicons from "@expo/vector-icons/Ionicons";

import MainHeader from "../Components/MainHeader";
import AppButton from "../Components/AppButton";
import AppInputPersonal from "../Components/AppInputPersonal";

const PersonalDetails = ({ navigation }) => {
  const [agreement, setAgreement] = useState(false);
  return (
    <ImageBackground
      style={styles.imgbg}
      source={require("../../assets/bg3.png")}
    >
      <MainHeader
        onPress={() => {
          navigation.goBack();
        }}
        HeaderText={"Personal Details"}
      />
      <View style={styles.Background}>
        {/* warning box */}
        <View style={styles.TopWarningBox}>
          <View style={styles.leftTopbox}>
            <Image
              style={styles.img}
              source={require("../../assets/abc.png")}
            />
          </View>
          <View style={styles.TopBG}>
            <Text style={styles.WarnText1}>
              Make sure all the information you provide matches the identity
              card.
            </Text>
          </View>
        </View>
        {/* warning box */}

        <View style={styles.InputContainer}>
          <AppInputPersonal
            name={"Full Name"}
            placeholder={"Enter your full name"}
          />
          <AppInputPersonal
            name={"ID Number"}
            placeholder={"Enter your ID Number"}
          />
          <>
            <Text style={styles.nameText}>Date of Birth</Text>
            <View style={styles.InputFields}>
              <TextInput style={styles.TextInput2} placeholder={"Date"} />
              <TextInput style={styles.TextInput3} placeholder={"Month"} />
              <TextInput style={styles.TextInput2} placeholder={"Year"} />
            </View>
          </>
          <AppInputPersonal
            name={"Phone Number"}
            placeholder={"Enter your phone nuber"}
          />

          {agreement ? (
            <TouchableOpacity
              onPress={() => {
                setAgreement(!agreement);
              }}
              style={styles.Agreeterms}
            >
              <View style={styles.ViewBox}>
                <Image
                  style={styles.ImgBg}
                  source={require("../../assets/tick1.png")}
                />
              </View>
              <Text>Agree to all terms</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => {
                setAgreement(!agreement);
              }}
              style={styles.Agreeterms}
            >
              <View style={styles.ViewBox}>
                <Image
                  style={styles.ImgBg}
                  source={require("../../assets/tick2.png")}
                />
              </View>
              <Text>Agree to all terms</Text>
            </TouchableOpacity>
          )}
          <AppButton
            BtnText={"Continue"}
            onPress={() => {
              navigation.navigate("BookSucess");
            }}
          />
        </View>
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
  Background: {
    backgroundColor: "white",
    width: "95%",
    height: h("80%"),
    alignSelf: "center",
    borderRadius: h("2%"),
    paddingTop: h("1%"),
  },
  TopWarningBox: {
    backgroundColor: "rgba(206, 185, 24, 0.2)",
    width: "95%",
    height: "20%",
    alignSelf: "center",
    borderRadius: h("2%"),
    borderColor: "rgba(206, 185, 24, 1)",
    borderWidth: h("0.3%"),
    flexDirection: "row",
  },
  leftTopbox: {
    // backgroundColor: "gold",
    width: "20%",
    height: "100%",
    paddingTop: h("3%"),
    paddingRight: h("1%"),
    // justifyContent: "center",
  },
  img: {
    width: "70%",
    height: "70%",
    resizeMode: "contain",
    alignSelf: "flex-end",
  },
  TopBG: {
    width: "80%",
    height: "100%",
    // backgroundColor: "red",
    justifyContent: "center",
    paddingLeft: h("1%"),
  },
  WarnText1: {
    color: "#000",
    fontSize: h("2%"),
  },
  InputContainer: {
    width: "90%",
    // backgroundColor: "red",
    height: "80%",
    alignSelf: "center",
  },
  InputFields: {
    width: "100%",
    height: h("7%"),
    backgroundColor: "white",
    marginTop: h("3%"),

    flexDirection: "row",
    justifyContent: "space-between",
  },
  InputText: {
    backgroundColor: "white",
    fontSize: h("2%"),
    fontWeight: "bold",
    width: "35%",
    paddingLeft: h("1%"),
    position: "absolute",
    top: -12,
    left: 20,
    color: "#5C55D0",
  },
  TextInput2: {
    // backgroundColor: "red",
    width: "20%",
    height: "100%",
    paddingLeft: h("2%"),
    fontSize: h("2%"),
    borderColor: "#0003",
    borderWidth: h("0.3%"),
    borderRadius: h("1%"),
  },
  TextInput3: {
    // backgroundColor: "red",
    width: "50%",
    height: "100%",
    paddingLeft: h("2%"),
    fontSize: h("2%"),
    borderColor: "#0003",
    borderWidth: h("0.3%"),
    borderRadius: h("1%"),
  },
  nameText: {
    color: "#000",
    fontSize: h("2%"),
    fontWeight: "bold",
    marginBottom: -h("2%"),
    marginTop: h("1%"),
  },
  Agreeterms: {
    flexDirection: "row",
    width: "45%",
    height: "10%",
    // backgroundColor: "red",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  ViewBox: {
    // borderColor: "#635BD6",
    // borderWidth: h("0.3%"),
    width: 30,
    height: 30,
    borderRadius: h("0.5%"),
    justifyContent: "center",
    alignItems: "center",
  },
  ImgBg: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});

export default PersonalDetails;
