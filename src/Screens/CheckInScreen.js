import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert
} from "react-native";
import React, { useState, useEffect } from "react";
import MainHeader from "../Components/MainHeader";
import { w, h } from "react-native-responsiveness";
import { Ionicons } from "@expo/vector-icons";
import { BarCodeScanner } from "expo-barcode-scanner";
import * as api from "../services/auth";
import { Header, ErrorText } from "../Components/Shared";

const CheckInScreen = ({ navigation }) => {
  const [scanned, setscanned] = useState(false);
  const [error, setError] = useState(null);
  const [hasPermission, setHasPermission] = useState(null);
  const [allowScan, setallowScan] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = async ({ type, data }) => {

    console.log(data);
    setscanned(true)
    setallowScan(false)
    setMessage("Successfully checked in the user")
    try {

      let response = await api.checkin(data);
      console.log("ran this function")
      // console.log(response.status)
      if (response.status === "success") {
        console.log(response);

        Alert.alert(
          'Successfully Logged the user ',
          "the user can now enter the store",
          [{ text: 'OK', onPress: () => null }],
          { cancelable: true },
        )
        // check if user is at the right route  need to change it so that 
        // it can rescanned 


      } else {

        setError(response.error[0].message);
      }

    } catch (error) {
      console.log(error)
      setError(response.error[0].message);

    }
  };
  return (
    <SafeAreaView style={styles.safeview}>
      <MainHeader
        HeaderText={"Scan QR Code"}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.mainCont}>
        <Text style={{ color: "white", textAlign: "center" }}>
          {scanned ? error ? (
            <ErrorText error={error} />
          ) : message : "Align QR code to fill inside the frame"}
        </Text>
        <View style={styles.scanner}>

          <View style={styles.overflowScanner}>
            {hasPermission === null ? (
              <Text style={{ color: "white", textAlign: "center" }}>
                Requesting for camera permission
              </Text>
            ) : hasPermission === false ? (
              <Text style={{ color: "white", textAlign: "center" }}>
                No access to camera
              </Text>
            ) : allowScan ? (
              <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={styles.ownScanner}
              />
            ) : (
              <Image
                source={require("../../assets/boundry.png")}
                style={styles.imgshow}
              />
            )}
          </View>
          <TouchableOpacity
            style={styles.scanBtn}
            onPress={() => {
              setallowScan(!allowScan)
              setscanned(false)
            }}
          >
            <Ionicons name="qr-code-outline" color={"white"} size={h("4%")} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CheckInScreen;

const styles = StyleSheet.create({
  safeview: {
    width: "100%",
    height: "100%",
    backgroundColor: "#636B6F",
  },
  mainCont: {
    width: "100%",
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  scanner: {
    width: w("90%"),
    height: h("54%"),
    position: "relative",
    borderRadius: h("3%"),
    marginTop: h("2%"),
  },
  imgshow: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    tintColor: "white",
  },
  scanBtn: {
    width: h("11%"),
    height: h("11%"),
    backgroundColor: "#635BD6",
    position: "absolute",
    bottom: -h("5.5%"),
    alignSelf: "center",
    borderRadius: h("11%"),
    borderWidth: h("0.7%"),
    borderColor: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  overflowScanner: {
    width: w("90%"),
    height: h("54%"),
    borderRadius: h("3%"),
    overflow: "hidden",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
  ownScanner: {
    width: w("100%"),
    height: h("100%"),
    position: "absolute",
    top: -h("10%"),
  },
});
