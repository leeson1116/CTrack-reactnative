import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  Alert
} from "react-native";
import React, { useEffect, useState } from "react";
import { w, h } from "react-native-responsiveness";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Entypo } from "@expo/vector-icons";
import QRCode from 'react-native-qrcode-svg';
import MainHeader from "../Components/MainHeader";
import AppButton from "../Components/AppButton";
import AppInputPersonal from "../Components/AppInputPersonal";
import StatusSelect from "../Components/statusSelect";
import StatusRSelect from "../Components/statusRSelect";
import * as api from "../services/auth";

import { useAuth } from "../providers/auth";



const Verifcation = ({ navigation }) => {
  const { state, handleLogout } = useAuth();

  const user = state.user;
  const [selected, setselected] = useState(user.status);


  async function handleSubmit(status) {
    try {
      let response = await api.updateStatus(status);

      if (response.status == "success") {
        Alert.alert(
          'Successfully update your status',
          "check if your status had changed",
          [{ text: 'OK', onPress: () => null }],
          { cancelable: true },
        )
        setselected(status)

      } else {
        Alert.alert(
          'Something went wrong',
          "Please try again",
          [{ text: 'OK', onPress: () => null }],
          { cancelable: true },
        )
      }
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <ImageBackground
      style={styles.imgbg}
      source={require("../../assets/bg3.png")}
    >
      <ScrollView contentContainerStyle={{ paddingBottom: h("10%"), paddingTop: h("5%") }}>
        <MainHeader
          onPress={() => {
            navigation.goBack();
          }}
          HeaderText={"Vaccination Certificate"}
        />

        <View style={styles.BgTopContainer}>
          <View style={styles.TopLeft}>
            {/* box */}
            <View style={styles.Box1}>
              <Ionicons
                name="checkmark-circle"
                size={h("4%")}
                color="#635BD6"
              />
              <Text style={styles.Dose}>1st Doses</Text>
            </View>
            {/* box */}
            {/* box */}
            <View style={styles.Box2}>
              <Ionicons name="checkmark-circle" size={h("4%")} color="#0003" />
              <Text style={styles.Dose2}>2nd Doses</Text>
            </View>
            {/* box */}
          </View>
          <View style={styles.TopRight}>
            {/* <Image
              style={{ width: "80%", height: "80%", resizeMode: "contain" }}
              source={require("../../assets/abc2.png")}
            /> */}
            <QRCode
              //QR code value
              value={user.token ? user.token : 'NA'}
              //size of QR Code
              size={120}
              //Color of the QR Code (Optional)
              color="black"
              //Background Color of the QR Code (Optional)
              backgroundColor="white"
              //Logo of in the center of QR Code (Optional)

              //Center Logo size  (Optional)
              logoSize={30}
              //Center Logo margin (Optional)
              logoMargin={2}
              //Center Logo radius (Optional)
              logoBorderRadius={15}
              //Center Logo background (Optional)
              logoBackgroundColor="yellow"
              style={{ width: "80%", height: "80%", resizeMode: "contain" }} /
            >
          </View>
        </View>
        {/* Bottom */}
        <View style={styles.BottomContainer}>
          {/* container 1 */}
          <View style={[styles.container, { marginTop: h("1%") }]}>
            <Text style={styles.Name}>Full Name</Text>
            <Text style={styles.Name2}>{user.username}</Text>
            <View style={styles.BottomTab} />
          </View>
          {/* container 1 */}
          {/* container 1 */}
          <View style={styles.container}>
            <Text style={styles.Name}>Email</Text>
            <Text style={styles.Name2}>{user.email}</Text>
            <View style={styles.BottomTab} />
          </View>
          {/* container 1 */}
          {/* container 1 */}


          {user.isRestaurant ? (
            <View style={styles.containerStatus}>
              <Text style={styles.Name}>Current Status</Text>
              {/* <Text style={styles.Name2}>{user.status ? user.status : "safe"}</Text> */}
              <StatusRSelect
                selected={selected}
                onPress={(dat) => {
                  selected == "resolved" ? dat == 'effected' ? (
                    Alert.alert(
                      'You cant perform this action',
                      "If You think your location is affected please contact the admin",
                      [{ text: 'OK', onPress: () => null }],
                      { cancelable: true },
                    )
                  ) : (
                    Alert.alert(
                      'Are you sure to change your status to ' + dat + '?',
                      "this will effect your logs record",
                      [{ text: 'OK', onPress: () => setselected(dat) }, { text: "cancel", onPress: () => null }],
                      { cancelable: true },
                    )
                  ) : (
                    Alert.alert(
                      'You cant perform this action',
                      "If You think your location is affected please contact the admin",
                      [{ text: 'OK', onPress: () => null }],
                      { cancelable: true },
                    )
                  )




                }}
              />

              {/* <View style={styles.BottomTab} /> */}

            </View>
          ) : (
            <View style={styles.containerStatus}>
              <Text style={styles.Name}>Current Status</Text>
              {/* <Text style={styles.Name2}>{user.status ? user.status : "safe"}</Text> */}
              <StatusSelect
                selected={selected}
                onPress={(dat) => {
                  dat == "contacted" ? (
                    Alert.alert(
                      'You cant perform this action',
                      "If You think your in close contacted please contact the admin",
                      [{ text: 'OK', onPress: () => null }],
                      { cancelable: true },
                    )
                  ) : (
                    Alert.alert(
                      'Are you sure to change your status to ' + dat + '?',
                      "this will effect your logs record",
                      [{
                        text: 'OK', onPress: () => {
                          handleSubmit(dat);

                        }
                      }, { text: "cancel", onPress: () => null }],
                      { cancelable: true },
                    )
                  )

                }}
              />

              {/* <View style={styles.BottomTab} /> */}

            </View>

          )}
          {/* container 1 */}
          {/* container 1 */}
          <View style={styles.container}>
            <Text style={styles.Name}>User Type</Text>
            <Text style={styles.Name2}>{user.isRestaurant ? "Restaurant" : "Normal User"}</Text>
            <View style={styles.BottomTab} />
          </View>

          {user.isRestaurant ? (
            <View style={styles.container}>
              <Text style={styles.Name}>VAT number</Text>
              <Text style={styles.Name2}>{user.isRestaurant ? user.VAT : "Normal User"}</Text>
              <View style={styles.BottomTab} />
            </View>
          ) : null}
          {/* container 1 */}
          {/* container 1 */}
          <View style={styles.container}>
            <Text style={styles.Name}>Vaccine Type</Text>
            <Text style={styles.Name2}>Sinovac Vaccine</Text>
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
          {/* container 1 */}
          <View style={styles.container}>
            <Text style={styles.Name}>Vaccine Location</Text>
            <Text style={styles.Name2}>Ibnu Sina Hospital</Text>
            <View style={styles.BottomTab} />
          </View>
          {/* container 1 */}
          <AppButton
            BtnText={"Log Out"}
            onPress={() => {
              //handle log out
              handleLogout();
              navigation.navigate("Login");
            }}
          />
        </View>
        {/* Bottom */}
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imgbg: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
  BgTopContainer: {
    backgroundColor: "white",
    width: "90%",
    height: h("20%"),
    borderRadius: h("2%"),
    alignSelf: "center",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  TopLeft: {
    // backgroundColor: "red",
    width: "50%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  TopRight: {
    // backgroundColor: "gold",
    width: "50%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
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
    marginTop: h("2%"),
    marginLeft: h("2%"),

  },
  containerStatus: {
    width: "90%",
    height: "10%",
    // backgroundColor: "red",
    marginTop: h("2%"),
    marginLeft: h("2%"),
    marginBottom: h("3%")
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

  Box1: {
    width: w("40%"),
    height: h("7%"),
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
    borderRadius: h("1%"),
    alignSelf: "center",
    borderColor: "#635BD6",
    borderWidth: h("0.2%"),
    backgroundColor: "#EEEEEE",
    paddingLeft: h("2%"),
    paddingRight: h("2%"),
  },
  Dose: {
    color: "#635BD6",
    fontSize: h("2%"),
  },

  Box2: {
    width: w("40%"),
    height: h("7%"),
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
    borderRadius: h("1%"),
    alignSelf: "center",
    borderColor: "#0003",
    borderWidth: h("0.3%"),
    backgroundColor: "#EEEEEE",
    paddingLeft: h("2%"),
    paddingRight: h("2%"),
    marginTop: h("1%"),
  },
  Dose2: {
    color: "#0003",
    fontSize: h("2%"),
  },
});

export default Verifcation;
