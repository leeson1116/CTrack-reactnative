import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import MapView from "react-native-maps";
import { w, h } from "react-native-responsiveness";
import Ionicons from "@expo/vector-icons/Ionicons";

const MapScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* top  */}
      <View style={styles.TopHeader}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={styles.LeftButton}
        >
          <Ionicons name="arrow-back-outline" size={h("3.5%")} color="#000" />
        </TouchableOpacity>
        <View style={styles.RightHeader}>
          <Ionicons name="search" size={h("3.5%")} color="#000" />
          <TextInput
            style={styles.Textinput}
            placeholder={"Find a hospitals"}
          />
        </View>
      </View>
      {/* top  */}
      {/* Bottom  */}
      <View style={styles.BottomHeader}>
        <View style={styles.RightHeader2}>
          <Text style={styles.LocationText}>Your location</Text>
          <Text style={styles.LocationText2}>Jl. Dago 12</Text>
        </View>

        <View style={styles.LeftButton}>
          <Image
            style={styles.LocalButton}
            source={require("../../assets/local.png")}
          />
        </View>
      </View>
      {/* Bottom  */}
      {/* last */}
      <View style={styles.LastHeader}>
        <Text style={styles.BookAppointmentText}>Nearby hospitals</Text>

        {/* COntainer 1 */}
        <View style={styles.BoxContainer}>
          <View style={styles.leftView}>
            <Image
              style={styles.img1}
              source={require("../../assets/h1.png")}
            />
          </View>

          <View style={styles.MainViewContainer}>
            <Text style={styles.vacTextHeader}>Ibnu Sina Hospital</Text>
            <Text style={styles.vacTextHeader2}>8 minute from location</Text>
          </View>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("SelectVaccine");
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
          <View style={styles.leftView}>
            <Image
              style={styles.img1}
              source={require("../../assets/h2.png")}
            />
          </View>

          <View style={styles.MainViewContainer}>
            <Text style={styles.vacTextHeader}>Gandaria Hospital</Text>
            <Text style={styles.vacTextHeader2}>18 minute from location</Text>
          </View>

          <TouchableOpacity
            onPress={() => {
              alert("HELLOW");
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
          <View style={styles.leftView}>
            <Image
              style={styles.img1}
              source={require("../../assets/h3.png")}
            />
          </View>

          <View style={styles.MainViewContainer}>
            <Text style={styles.vacTextHeader}>Jakarta Hospital</Text>
            <Text style={styles.vacTextHeader2}>38 minute from location</Text>
          </View>

          <TouchableOpacity
            onPress={() => {
              alert("HELLOW");
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
      {/* last */}

      <MapView
        style={styles.map}
        region={{
          latitude: 53.350140,
          longitude: -6.266155,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: w("100%"),
    height: h("100%"),
    // marginTop: -h("10%"),
  },
  TopHeader: {
    // backgroundColor: "gold",
    width: w("90%"),
    height: h("10%"),
    alignSelf: "center",
    zIndex: 999999,
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: h("1%"),
    justifyContent: "space-between",
    position: "absolute",
  },
  BottomHeader: {
    // backgroundColor: "gold",
    width: w("90%"),
    height: h("10%"),
    alignSelf: "center",
    zIndex: 222,
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: h("1%"),
    justifyContent: "space-between",
    position: "absolute",
    top: 320,
    // marginTop: h("2%"),
  },
  LastHeader: {
    backgroundColor: "#fff",
    width: w("90%"),
    height: h("45%"),
    alignSelf: "center",
    zIndex: 222,

    paddingTop: h("2%"),
    position: "absolute",
    top: 400,
    borderRadius: h("2%"),
    // marginTop: h("2%"),
  },
  LeftButton: {
    backgroundColor: "#fff",
    width: 60,
    height: 60,
    borderRadius: h("1%"),
    justifyContent: "center",
    alignItems: "center",
  },
  RightHeader: {
    backgroundColor: "#fff",
    width: w("70%"),
    height: 60,
    borderRadius: h("1%"),
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  RightHeader2: {
    backgroundColor: "#fff",
    width: w("70%"),
    height: 60,
    borderRadius: h("1%"),
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
  LocalButton: {
    width: "70%",
    height: "70%",
    resizeMode: "contain",
  },
  Textinput: {
    // backgroundColor: "red",
    width: "80%",
    height: "100%",
    paddingLeft: h("1%"),
    fontSize: h("2%"),
  },
  LocationText: {
    color: "#0004",
    fontSize: h("2.2%"),
  },
  LocationText2: {
    color: "#000",
    fontSize: h("2.2%"),
    fontWeight: "bold",
  },
  BookAppointmentText: {
    color: "#000",
    fontSize: h("3%"),
    fontWeight: "bold",
    alignSelf: "center",
  },
  BoxContainer: {
    backgroundColor: "#fff",
    width: "95%",
    height: h("12%"),
    borderRadius: h("1%"),
    marginTop: h("0.5%"),
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: h("2%"),
    elevation: h("0.2%"),
    alignSelf: "center",
  },
  leftView: {
    backgroundColor: "#fff",
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
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  MainViewContainer: {
    // backgroundColor: "red",
    width: "58%",
    height: "100%",
    justifyContent: "center",
    paddingLeft: h("1%"),
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
export default MapScreen;
