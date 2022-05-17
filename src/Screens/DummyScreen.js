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
import React, { useState, useEffect } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { w, h } from "react-native-responsiveness";
import AppButton from "../Components/AppButton";
import MainHeader from "../Components/MainHeader";

import * as api from "../services/auth";
import { useAuth } from "../providers/auth";
import { Header, ErrorText } from "../Components/Shared";

const DummyScreen = ({ navigation }) => {
  const { state, handleLogout } = useAuth();
  const user = state.user;
  const { navigate } = navigation;
  const [tochange, setToChange] = useState(null);
  const [error, setError] = useState(null);

  const [list, setList] = useState([]);
  useEffect(() => {
    let mounted = true;
    (async () => {

      try {
        let response = await api.getUserLogs();

        if (mounted) {
          setList(response.result);
        }
        setToChange(null)


      } catch (error) {
        console.log(error)
      }
      return () => mounted = false
    })();
  }, [tochange]);

  const handleCheckout = async (data) => {
    try {
      console.log(data);
      let query = {
        "logid": data
      }
      let response = await api.checkout(query)
      if (response.status === "success") {
        setToChange("changed");
        // navigation.navigate("Dummy");
      } else {
        setError(response.eror[0].message)
      }

    } catch (error) {
      console.log(error)
      setError(response.error[0].message)
    }

  }

  return (
    <ImageBackground
      style={styles.imgbg}
      source={require("../../assets/bg3.png")}
    >
      <MainHeader
        onPress={() => {
          navigation.goBack();
        }}
        HeaderText={"Check-In Logs"}
      />
      <ScrollView contentContainerStyle={{ paddingBottom: h("2%") }}>
        <View style={styles.BottomContainer}>
          <View style={styles.BookApoinmentContainer}>
            <View style={{
              alignItems: "center",
              flexDirection: "row",
            }} >
              <Text style={styles.BookAppointmentText}>Please check out</Text>

              <TouchableOpacity
                onPress={() => {
                  setToChange("changed");
                }}
                style={styles.RightView1}
              >
                <Ionicons
                  name="refresh-outline"
                  size={h("3.5%")}
                  color="#fff"
                />
              </TouchableOpacity>
            </View>

            <ErrorText error={error} />
            {/* COntainer 1 */}
            {list.slice(0).reverse().map(item => (
              < View style={styles.BoxContainer} key={item._id} >
                {
                  item.status == "safe" ? (
                    <View style={styles.leftView2}>
                      <Image
                        style={styles.img1}
                        source={require("../../assets/rapit.png")}
                      />
                    </View>
                  ) : item.status == "effected" ? (
                    <View style={styles.leftView3}>
                      <Image
                        style={styles.img1}
                        source={require("../../assets/earth.png")}
                      />
                    </View>
                  ) : (
                    <View style={styles.leftView}>
                      <Image
                        style={styles.img1}
                        source={require("../../assets/vac.png")}
                      />
                    </View>

                  )
                }

                < View style={styles.MainViewContainer} >
                  <Text style={styles.vacTextHeader}>{item.restaurant.username}</Text>

                  <Text style={styles.vacTextHeader2}>{item.status}</Text>
                  <Text style={styles.vacTextHeader3}>{item.loggedFrom.substring(0, 10)} - {item.loggedTo ? item.loggedTo.substring(0, 10) : "present"} </Text>
                </View>

                {item.loggedTo != false ? null : (
                  <TouchableOpacity
                    onPress={() => {
                      handleCheckout(item._id)
                    }}
                    style={styles.RightView}
                  >
                    <Ionicons
                      name="chevron-forward-outline"
                      size={h("3.5%")}
                      color="#fff"
                    />
                  </TouchableOpacity>

                )}

              </View>
            )
            )}



            {/* COntainer 1 */}
          </View>
        </View>


      </ScrollView >

    </ImageBackground >
  );
};

export default DummyScreen;

const styles = StyleSheet.create({
  imgbg: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
  Appbutton: {
    backgroundColor: "#000",
    width: w("80%"),
    height: h("7.5%"),
    borderRadius: h("100%"),
    marginTop: h("2%"),
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  Buttontext: {
    color: "white",
    fontWeight: "bold",
    fontSize: h("2%"),
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

  RightView1: {
    backgroundColor: "#000",
    width: 40,
    height: 40,
    borderRadius: h("1%"),
    justifyContent: "center",
    alignItems: "center",
    marginLeft: h("6%")
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
  BookApoinmentContainer: {
    // backgroundColor: "gold",
    width: "90%",
    height: "100%",
    alignSelf: "center",
    marginTop: h("1%"),
    paddingLeft: h("2%"),
    paddingTop: h("2%"),
    paddingBottom: h("2%"),
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
  BookAppointmentText: {
    color: "#000",
    fontSize: h("3%"),
    fontWeight: "bold",
  },
  vacTextHeader3: {
    color: "#0003",
    fontSize: h("1.4%"),
  },
  MainViewContainer: {
    // backgroundColor: "red",
    width: "58%",
    height: "100%",
    justifyContent: "center",
    paddingLeft: h("2%"),
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
    height: "100%",
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
