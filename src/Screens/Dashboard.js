import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { w, h } from "react-native-responsiveness";
import * as api from "../services/auth";
import Ionicons from "@expo/vector-icons/Ionicons";

import { useAuth } from "../providers/auth";


// components
import DashboardHeader from "../Components/DashboardHeader";

const Dashboard = ({ navigation }) => {
  const { state, handleLogout } = useAuth();
  const [cc, setCC] = useState("");
  const [dc, setDC] = useState("");
  const user = state.user;


  useEffect(() => {
    let mounted = true;
    (async () => {

      try {
        let response = await api.getConfirmCase();
        let totalLength = response.features.length;

        // console.log(totalLength)
        // console.log(response.features[totalLength - 1].attributes.Positive)
        if (mounted) {
          setCC(response.features[totalLength - 1].attributes.Positive);
          setDC((response.features[totalLength - 1].attributes.Positive) - (response.features[totalLength - 2].attributes.Positive))
        }
      } catch (error) {
        console.log(error)
      }
      return () => mounted = false
    })();
  }, []);
  return (

    <View style={styles.maincontainer}>
      <DashboardHeader />
      {/* hellow Section */}
      <View style={styles.MainTopContainer}>
        {/* left */}
        <View style={styles.LeftMainTopContaienr}>
          <Text style={styles.HeaderText}>Hello {user.username}👋</Text>
          <Text style={styles.SubHeaderText}>{user.isRestaurant ? "Restaurant" : "Normal User"}</Text>
        </View>
        <View style={styles.RightMainTopContaienr}>
          <Text style={styles.SubText3}>Your location</Text>
          <Text style={styles.SubText4}>Jl. Dago 12</Text>
        </View>
        {/* left */}
      </View>
      {/* hellow Section */}

      {/* Blue Card Section */}
      <View style={styles.BlueCardSection}>
        <Text style={styles.TotalCaseText}>Total confirmed cases</Text>
        <Text style={styles.TotalCaseText2}>{cc}</Text>
        <View style={styles.BotomView}>
          <Ionicons
            name="chevron-up-circle-outline"
            size={h("3.5%")}
            color="#3CDF31"
          />
          <Text style={styles.PostiveText}>+{dc}</Text>
        </View>
      </View>
      {/* Blue Card Section */}

      {/* appointment */}
      <View style={styles.BookApoinmentContainer}>
        <Text style={styles.BookAppointmentText}>Book appointment</Text>
        {/* COntainer 1 */}
        <View style={styles.BoxContainer}>
          <View style={styles.leftView}>
            <Image
              style={styles.img1}
              source={require("../../assets/vac.png")}
            />
          </View>

          <View style={styles.MainViewContainer}>
            <Text style={styles.vacTextHeader}>Vaccination</Text>
            <Text style={styles.vacTextHeader2}>600 Hospital</Text>
          </View>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("MapScreen");
            }}
            style={styles.RightView}
          >
            <Ionicons
              name="chevron-forward-outline"
              size={h("3.5%")}
              color="#fff"
            />
          </TouchableOpacity>
        </View>

        {/* COntainer 1 */}
        {/* COntainer 1 */}
        <View style={styles.BoxContainer}>
          <View style={styles.leftView2}>
            <Image
              style={styles.img1}
              source={require("../../assets/rapit.png")}
            />
          </View>

          <View style={styles.MainViewContainer}>
            <Text style={styles.vacTextHeader}>Rapid Test</Text>
            <Text style={styles.vacTextHeader2}>1600 Hospital</Text>
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate("Prevention")}
            style={styles.RightView}
          >
            <Ionicons
              name="chevron-forward-outline"
              size={h("3.5%")}
              color="#fff"
            />
          </TouchableOpacity>
        </View>

        {/* COntainer 1 */}
        {/* COntainer 1 */}
        <View style={styles.BoxContainer}>
          <View style={styles.leftView3}>
            <Image
              style={styles.img1}
              source={require("../../assets/earth.png")}
            />
          </View>

          <View style={styles.MainViewContainer}>
            <Text style={styles.vacTextHeader}>PCR Test</Text>
            <Text style={styles.vacTextHeader2}>600 Hospital</Text>
          </View>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Verifcation");
            }}
            style={styles.RightView}
          >
            <Ionicons
              name="chevron-forward-outline"
              size={h("3.5%")}
              color="#fff"
            />
          </TouchableOpacity>
        </View>

        {/* COntainer 1 */}
      </View>
      {/* appointment */}
    </View>
  );
};

const styles = StyleSheet.create({
  maincontainer: {
    backgroundColor: "white",
    width: "100%",
    height: "100%",
  },
  MainTopContainer: {
    // backgroundColor: "gold",
    width: w("90%"),
    height: h("13%"),
    alignSelf: "center",
    flexDirection: "row",
  },
  LeftMainTopContaienr: {
    // backgroundColor: "green",
    width: "60%",
    height: "100%",
    justifyContent: "center",
    // alignItems: "center",
  },
  RightMainTopContaienr: {
    // backgroundColor: "pink",
    width: "40%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  HeaderText: {
    color: "black",
    fontSize: h("3.3%"),
    fontWeight: "bold",
  },
  SubHeaderText: {
    color: "#0004",
    fontSize: h("2.2%"),
    marginTop: h("1%"),
    marginLeft: h("1%"),
  },
  SubText3: {
    color: "#0004",
    fontSize: h("2.2%"),
  },
  SubText4: {
    color: "#000",
    fontSize: h("2.2%"),
    fontWeight: "bold",
  },
  BlueCardSection: {
    backgroundColor: "#635BD6",
    width: "90%",
    height: h("20%"),
    alignSelf: "center",
    borderRadius: h("2%"),
    justifyContent: "center",
    alignItems: "center",
  },
  TotalCaseText: {
    color: "#fff7",
    fontSize: h("2%"),
  },
  PostiveText: {
    color: "white",
    fontSize: h("2%"),
  },
  PostiveText: {
    color: "#3CDF31",
    fontSize: h("2.2%"),
  },
  TotalCaseText2: {
    color: "white",
    fontSize: h("4%"),
    fontWeight: "bold",
  },
  BotomView: {
    // backgroundColor: "red",
    width: "30%",
    height: "20%",
    flexDirection: "row",
    marginTop: h("1%"),
    justifyContent: "center",
    alignItems: "center",
  },
  BookApoinmentContainer: {
    // backgroundColor: "gold",
    width: "90%",
    height: h("50%"),
    alignSelf: "center",
    marginTop: h("1%"),
    paddingLeft: h("2%"),
    paddingTop: h("2%"),
  },
  BookAppointmentText: {
    color: "#000",
    fontSize: h("3%"),
    fontWeight: "bold",
  },
  BoxContainer: {
    // backgroundColor: "#F7EEED",
    width: "99%",
    height: h("12%"),
    borderRadius: h("1%"),
    marginTop: h("1%"),
    borderColor: "#0003",
    borderWidth: h("0.2%"),
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: h("1%"),
  },
  leftView: {
    backgroundColor: "#F6D9CB",
    width: 60,
    height: 60,
    borderRadius: h("1%"),
    justifyContent: "center",
    alignItems: "center",
  },
  leftView2: {
    backgroundColor: "#E7EBDA",
    width: 60,
    height: 60,
    borderRadius: h("1%"),
    justifyContent: "center",
    alignItems: "center",
  },
  leftView3: {
    backgroundColor: "#FBF3AD",
    width: 60,
    height: 60,
    borderRadius: h("1%"),
    justifyContent: "center",
    alignItems: "center",
  },
  RightView: {
    backgroundColor: "#000",
    width: 60,
    height: 60,
    borderRadius: h("1%"),
    justifyContent: "center",
    alignItems: "center",
  },
  img1: {
    width: "70%",
    height: "70%",
    resizeMode: "contain",
  },
  MainViewContainer: {
    // backgroundColor: "red",
    width: "58%",
    height: "100%",
    justifyContent: "center",
    paddingLeft: h("2%"),
  },
  vacTextHeader: {
    color: "black",
    fontSize: h("2.2%"),
    fontWeight: "bold",
  },
  vacTextHeader2: {
    color: "#0003",
    fontSize: h("2%"),
  },
});

export default Dashboard;
