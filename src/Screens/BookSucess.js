import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { w, h } from "react-native-responsiveness";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Entypo } from "@expo/vector-icons";

import MainHeader from "../Components/MainHeader";
import AppButton from "../Components/AppButton";
import AppInputPersonal from "../Components/AppInputPersonal";

const BookSucess = ({ navigation }) => {
  return (
    <ImageBackground
      style={styles.imgbg}
      source={require("../../assets/bg3.png")}
    >
      <ScrollView contentContainerStyle={{ paddingBottom: h("2%") }}>
        <MainHeader
          onPress={() => {
            navigation.goBack();
          }}
          HeaderText={"Booking Success"}
        />

        <View style={styles.BgTopContainer}>
          {/* round */}
          <View style={styles.TopRoundTick}>
            <View style={styles.TopRoundTick2}>
              <Ionicons name="checkmark-outline" size={h("4%")} color="#fff" />
            </View>
          </View>
          {/* round */}

          <View
            style={{
              width: "90%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={styles.FontText1}>
              Congratulations, you have successfully
            </Text>
            <Text style={styles.FontText1}>placed your vaccinate booking</Text>
          </View>

          {/* top text end */}

          {/* button */}
          <View style={styles.ButtonContainer}>
            <Text style={styles.doseHtext}>1st doses vaccination</Text>
            <Text style={styles.doseHtext2}>Sinovac Vaccine</Text>
          </View>

          {/* button */}
        </View>
        {/* Bottom */}
        <View style={styles.BottomContainer}>
          <Text style={styles.Eticket}>e-Ticket Detail</Text>
          {/* container 1 */}
          <View style={[styles.container, { marginTop: h("5%") }]}>
            <Text style={styles.Name}>Full Name</Text>
            <Text style={styles.Name2}>Darien Wainwright</Text>
            <View style={styles.BottomTab} />
          </View>
          {/* container 1 */}
          {/* container 1 */}
          <View style={styles.container}>
            <Text style={styles.Name}>ID Number</Text>
            <Text style={styles.Name2}>4214991277741924</Text>
            <View style={styles.BottomTab} />
          </View>
          {/* container 1 */}
          {/* container 1 */}
          <View style={styles.container}>
            <Text style={styles.Name}>Date of Birth</Text>
            <Text style={styles.Name2}>10/08/1996</Text>
            <View style={styles.BottomTab} />
          </View>
          {/* container 1 */}
          {/* container 1 */}
          <View style={styles.container}>
            <Text style={styles.Name}>Phone Number</Text>
            <Text style={styles.Name2}>08123456789</Text>
            <View style={styles.BottomTab} />
          </View>
          {/* container 1 */}
          {/* container 1 */}
          <View style={styles.container}>
            <Text style={styles.Name}>Vaccine Location</Text>
            <View style={styles.HosStyles}>
              <Text style={styles.Name2}>Ibnu Sina Hospital</Text>
              <TouchableOpacity style={styles.mapBtn}>
                <Entypo name="location-pin" size={h("2.5%")} color="#5952D0" />
                <Text
                  style={{
                    color: "#5952D0",
                    fontSize: h("2%"),
                    fontWeight: "bold",
                  }}
                >
                  View maps
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.BottomTab} />
          </View>
          {/* container 1 */}
          {/* container 1 */}
          <View style={styles.container}>
            <Text style={styles.Name}>Date</Text>
            <Text style={styles.Name2}>16th Sept 2021, 10:00 AM</Text>
            <View style={styles.BottomTab} />
          </View>
          {/* container 1 */}
          <AppButton
            BtnText={"Show your QR Code"}
            onPress={() => {
              navigation.navigate("Verifcation");
            }}
          />
        </View>
        {/* Bottom */}
      </ScrollView>
    </ImageBackground>
  );
};

export default BookSucess;

const styles = StyleSheet.create({
  imgbg: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
  BgTopContainer: {
    backgroundColor: "white",
    width: "90%",
    height: h("30%"),
    borderRadius: h("2%"),
    alignSelf: "center",
    // justifyContent: "center",
    alignItems: "center",
  },
  TopRoundTick: {
    backgroundColor: "white",
    width: 70,
    height: 70,
    borderRadius: h("102%"),
    marginTop: -h("4%"),
    justifyContent: "center",
    alignItems: "center",
  },
  TopRoundTick2: {
    backgroundColor: "#AECB52",
    width: 55,
    height: 55,
    borderRadius: h("102%"),
    justifyContent: "center",
    alignItems: "center",
  },
  FontText1: {
    color: "black",
    fontSize: h("2.2%"),
    fontWeight: "bold",
  },
  ButtonContainer: {
    // backgroundColor: "red",
    width: "90%",
    height: "40%",
    marginTop: h("3.2%"),
    borderRadius: h("1%"),
    borderColor: "#0003",
    borderWidth: h("0.3%"),
    justifyContent: "center",
    alignItems: "center",
  },
  doseHtext: {
    color: "black",
    fontSize: h("2.5%"),
    fontWeight: "bold",
  },
  doseHtext2: {
    color: "#0003",
    fontSize: h("2%"),
    fontWeight: "bold",
  },
  BottomContainer: {
    width: "90%",
    height: h("90%"),
    backgroundColor: "white",
    borderRadius: h("2%"),
    alignSelf: "center",
    marginTop: h("1%"),
    paddingTop: h("2%"),
    // paddingLeft: h("2%"),
  },
  Eticket: {
    color: "black",
    fontSize: h("3%"),
    fontWeight: "bold",
    marginLeft: h("2%"),
  },
  Name: {
    color: "#0003",
    fontSize: h("2%"),
  },
  HosStyles: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  Name2: {
    color: "#000",
    fontSize: h("2%"),
    fontWeight: "bold",
    marginTop: h("0.5%"),
  },
  container: {
    width: "90%",
    height: "10%",
    // backgroundColor: "red",
    marginTop: h("1%"),
    marginLeft: h("2%"),
  },
  BottomTab: {
    width: "100%",

    borderBottomColor: "#0003",
    borderBottomWidth: h("0.3%"),
    marginTop: h("1%"),
  },
  mapBtn: {
    width: w("30%"),
    height: h("3%"),
    backgroundColor: "#f4f4f4",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderRadius: h("1%"),
  },
});
