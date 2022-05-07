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

const SelectVaccine = ({ navigation }) => {
  const [vacc, Setvacc] = useState("Sinovac");
  const [vacc2, Setvacc2] = useState("Sinovac");

  return (
    <ImageBackground
      style={styles.imgbg}
      source={require("../../assets/bg3.png")}
    >
      <MainHeader
        onPress={() => {
          navigation.goBack();
        }}
        HeaderText={"Select Vaccine"}
      />
      {/* top vaccine container */}
      <View style={styles.TopContainer}>
        {/* topContainer */}

        {vacc === "Sinovac" ? (
          <TouchableOpacity
            onPress={() => {
              Setvacc("");
            }}
            style={styles.VaccBox2}
          >
            {/* top */}
            <View style={styles.TopVacBox}>
              <View style={styles.leftTopBox}>
                <Text style={styles.VacName}>Sinovac</Text>
              </View>
              <View style={styles.RightTopBox}>
                <Text style={styles.DetailVaccineText}>Detail vaccine </Text>
                <View style={styles.ViewBox}>
                  <Image
                    style={styles.ImgBg}
                    source={require("../../assets/tick1.png")}
                  />
                </View>
              </View>
            </View>
            {/* top */}
            {/* Bottom */}
            <View style={styles.BottomVacBox}>
              <View style={styles.BottomBoxContainer2}>
                <Text style={styles.boxSubText}>2420 doses available</Text>
                <Text style={styles.boxSubText}>80 hospitals nearby</Text>
              </View>
            </View>
            {/* Bottom */}
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              Setvacc("Sino");
              Setvacc2("Sinovac");
            }}
            style={styles.VaccBox}
          >
            {/* top */}
            <View style={styles.TopVacBox}>
              <View style={styles.leftTopBox}>
                <Text style={styles.VacName}>Sinovac</Text>
              </View>
              <View style={styles.RightTopBox}>
                <Text style={styles.DetailVaccineText}>Detail vaccine </Text>
                <View style={styles.ViewBox}>
                  <Image
                    style={styles.ImgBg}
                    source={require("../../assets/tick2.png")}
                  />
                </View>
              </View>
            </View>
            {/* top */}
            {/* Bottom */}
            <View style={styles.BottomVacBox}>
              <View style={styles.BottomBoxContainer}>
                <Text style={styles.boxSubText}>2420 doses available</Text>
                <Text style={styles.boxSubText}>80 hospitals nearby</Text>
              </View>
            </View>
            {/* Bottom */}
          </TouchableOpacity>
        )}
        {vacc === "Astra" ? (
          <TouchableOpacity
            onPress={() => {
              Setvacc("");
            }}
            style={styles.VaccBox2}
          >
            {/* top */}
            <View style={styles.TopVacBox}>
              <View style={styles.leftTopBox}>
                <Text style={styles.VacName}>Astra Zaneca</Text>
              </View>
              <View style={styles.RightTopBox}>
                <Text style={styles.DetailVaccineText}>Detail vaccine </Text>
                <View style={styles.ViewBox}>
                  <Image
                    style={styles.ImgBg}
                    source={require("../../assets/tick1.png")}
                  />
                </View>
              </View>
            </View>
            {/* top */}
            {/* Bottom */}
            <View style={styles.BottomVacBox}>
              <View style={styles.BottomBoxContainer2}>
                <Text style={styles.boxSubText}>2420 doses available</Text>
                <Text style={styles.boxSubText}>80 hospitals nearby</Text>
              </View>
            </View>
            {/* Bottom */}
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              Setvacc("Astra");
              Setvacc2("Astra");
            }}
            style={styles.VaccBox}
          >
            {/* top */}
            <View style={styles.TopVacBox}>
              <View style={styles.leftTopBox}>
                <Text style={styles.VacName}>Astra Zaneca</Text>
              </View>
              <View style={styles.RightTopBox}>
                <Text style={styles.DetailVaccineText}>Detail vaccine </Text>
                <View style={styles.ViewBox}>
                  <Image
                    style={styles.ImgBg}
                    source={require("../../assets/tick2.png")}
                  />
                </View>
              </View>
            </View>
            {/* top */}
            {/* Bottom */}
            <View style={styles.BottomVacBox}>
              <View style={styles.BottomBoxContainer}>
                <Text style={styles.boxSubText}>2420 doses available</Text>
                <Text style={styles.boxSubText}>80 hospitals nearby</Text>
              </View>
            </View>
            {/* Bottom */}
          </TouchableOpacity>
        )}
        {vacc === "Pfizer" ? (
          <TouchableOpacity
            onPress={() => {
              Setvacc("");
            }}
            style={styles.VaccBox2}
          >
            {/* top */}
            <View style={styles.TopVacBox}>
              <View style={styles.leftTopBox}>
                <Text style={styles.VacName}>Pfizer</Text>
              </View>
              <View style={styles.RightTopBox}>
                <Text style={styles.DetailVaccineText}>Detail vaccine </Text>
                <View style={styles.ViewBox}>
                  <Image
                    style={styles.ImgBg}
                    source={require("../../assets/tick1.png")}
                  />
                </View>
              </View>
            </View>
            {/* top */}
            {/* Bottom */}
            <View style={styles.BottomVacBox}>
              <View style={styles.BottomBoxContainer2}>
                <Text style={styles.boxSubText}>2420 doses available</Text>
                <Text style={styles.boxSubText}>80 hospitals nearby</Text>
              </View>
            </View>
            {/* Bottom */}
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              Setvacc("Pfizer");
              Setvacc2("Pfizer");
            }}
            style={styles.VaccBox}
          >
            {/* top */}
            <View style={styles.TopVacBox}>
              <View style={styles.leftTopBox}>
                <Text style={styles.VacName}>Pfizer</Text>
              </View>
              <View style={styles.RightTopBox}>
                <Text style={styles.DetailVaccineText}>Detail vaccine </Text>
                <View style={styles.ViewBox}>
                  <Image
                    style={styles.ImgBg}
                    source={require("../../assets/tick2.png")}
                  />
                </View>
              </View>
            </View>
            {/* top */}
            {/* Bottom */}
            <View style={styles.BottomVacBox}>
              <View style={styles.BottomBoxContainer}>
                <Text style={styles.boxSubText}>2420 doses available</Text>
                <Text style={styles.boxSubText}>80 hospitals nearby</Text>
              </View>
            </View>
            {/* Bottom */}
          </TouchableOpacity>
        )}
        {vacc === "Moderna" ? (
          <TouchableOpacity
            onPress={() => {
              Setvacc("");
            }}
            style={styles.VaccBox2}
          >
            {/* top */}
            <View style={styles.TopVacBox}>
              <View style={styles.leftTopBox}>
                <Text style={styles.VacName}>Moderna</Text>
              </View>
              <View style={styles.RightTopBox}>
                <Text style={styles.DetailVaccineText}>Detail vaccine </Text>
                <View style={styles.ViewBox}>
                  <Image
                    style={styles.ImgBg}
                    source={require("../../assets/tick1.png")}
                  />
                </View>
              </View>
            </View>
            {/* top */}
            {/* Bottom */}
            <View style={styles.BottomVacBox}>
              <View style={styles.BottomBoxContainer2}>
                <Text style={styles.boxSubText}>2420 doses available</Text>
                <Text style={styles.boxSubText}>80 hospitals nearby</Text>
              </View>
            </View>
            {/* Bottom */}
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              Setvacc("Moderna");
              Setvacc2("Moderna");
            }}
            style={styles.VaccBox}
          >
            {/* top */}
            <View style={styles.TopVacBox}>
              <View style={styles.leftTopBox}>
                <Text style={styles.VacName}>Moderna</Text>
              </View>
              <View style={styles.RightTopBox}>
                <Text style={styles.DetailVaccineText}>Detail vaccine </Text>
                <View style={styles.ViewBox}>
                  <Image
                    style={styles.ImgBg}
                    source={require("../../assets/tick2.png")}
                  />
                </View>
              </View>
            </View>
            {/* top */}
            {/* Bottom */}
            <View style={styles.BottomVacBox}>
              <View style={styles.BottomBoxContainer}>
                <Text style={styles.boxSubText}>2420 doses available</Text>
                <Text style={styles.boxSubText}>80 hospitals nearby</Text>
              </View>
            </View>
            {/* Bottom */}
          </TouchableOpacity>
        )}

        {/* topContainer */}
      </View>
      {/* top vaccine container */}
      {/* Bottom vaccine container */}
      <View style={styles.BottomContainer}>
        <View style={styles.LeftBottomContainer}>
          <Text style={styles.VTypText}>Vaccine Type</Text>
          <Text style={styles.VTypText2}>{vacc2}</Text>
        </View>
        <View style={styles.RightBottomContainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Medicine", {
                name: vacc2,
              });
            }}
            style={styles.Appbutton}
          >
            <Text style={styles.Buttontext}>Continue</Text>
            <Image
              style={styles.arr}
              source={require("../../assets/arr2.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
      {/* Bottom vaccine container */}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imgbg: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
  TopContainer: {
    backgroundColor: "white",
    width: "90%",
    height: h("67%"),
    alignSelf: "center",
    borderRadius: h("2%"),
    paddingTop: h("1%"),
  },

  VaccBox: {
    backgroundColor: "#Fff",
    width: "90%",
    height: h("15%"),
    alignSelf: "center",
    borderColor: "#0003",
    borderWidth: h("0.3%"),
    borderRadius: h("2%"),
    marginTop: h("1%"),
  },
  VaccBox2: {
    backgroundColor: "rgba(99, 91, 214, 0.2)",
    width: "90%",
    height: h("15%"),
    alignSelf: "center",
    borderColor: "#0003",
    borderWidth: h("0.3%"),
    borderColor: "#5952D0",
    borderWidth: h("0.3%"),
    borderRadius: h("2%"),
    marginTop: h("1%"),
  },
  TopVacBox: {
    // backgroundColor: "gold",
    width: "90%",
    height: "43%",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  leftTopBox: {
    // backgroundColor: "green",
    width: "45%",
    height: "100%",
    justifyContent: "center",
  },
  RightTopBox: {
    // backgroundColor: "pink",
    width: "55%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  VacName: {
    color: "black",
    fontSize: h("2.5"),
    fontWeight: "bold",
  },
  DetailVaccineText: {
    color: "#5952D0",
    fontSize: h("2.2"),
    fontWeight: "bold",
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
  BottomVacBox: {
    // backgroundColor: "gold",
    width: "90%",
    height: "43%",
    alignSelf: "center",
    // justifyContent: "center",
    alignItems: "center",
    // flexDirection: "row",
  },
  BottomBoxContainer: {
    backgroundColor: "white",
    width: "95%",
    height: "90%",
    borderRadius: h("1%"),
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderColor: "rgba(174, 203, 82, 0.5)",
    borderWidth: h("0.3%"),
  },
  BottomBoxContainer2: {
    backgroundColor: "#fff",
    width: "95%",
    height: "90%",
    borderRadius: h("1%"),
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderColor: "rgba(99, 91, 214, 1)",
    borderWidth: h("0.2%"),
  },
  boxSubText: {
    color: "#0003",
    fontSize: h("1.7%"),
  },
  BottomContainer: {
    backgroundColor: "#fff",
    width: "90%",
    height: h("13%"),
    alignSelf: "center",
    marginTop: h("1%"),
    borderRadius: h("2%"),
    flexDirection: "row",
  },
  LeftBottomContainer: {
    width: "40%",
    height: "100%",
    // backgroundColor: "gold",
    justifyContent: "center",
    paddingLeft: h("2%"),
  },
  RightBottomContainer: {
    width: "60%",
    height: "100%",
    justifyContent: "center",
    // backgroundColor: "green",
  },
  VTypText: {
    color: "#0005",
    fontSize: h("2%"),
  },
  VTypText2: {
    color: "#000",
    fontSize: h("2%"),
    fontWeight: "bold",
  },
  Appbutton: {
    backgroundColor: "#000",
    width: "90%",
    height: "50%",
    borderRadius: h("100%"),
    marginTop: h("2%"),
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  Buttontext: {
    color: "white",
    fontWeight: "bold",
    fontSize: h("2%"),
  },
  arr: {
    width: "20%",
    height: "25%",
    resizeMode: "contain",
    marginTop: h("0.5%"),
    // backgroundColor: "red",
  },
});
export default SelectVaccine;
