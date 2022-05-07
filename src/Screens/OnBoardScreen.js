import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  FlatList,
  Image,
} from "react-native";
import React, { useState, useEffect, useRef } from "react";
import { w, h } from "react-native-responsiveness";
import AppButton from "../Components/AppButton";
import NextBtn from "../Components/NextBtn";
const OnBoardScreen = ({ navigation }) => {
  const [itemindex, setitemindex] = useState(0);
  const refContainer = useRef();

  const onboardData = [
    {
      title: "Get information about Covid-19",
      key: 1,
      subtitle:
        "Get latest update about covid-19 in ireland and notifications about daily case updates",
      imglink: require("../../assets/onbordsec.png"),
    },
    {
      title: "Digital Contact Tracing",
      key: 2,

      subtitle:
        "no more getting held back in a line writing down names for contact tracing, just scan the store QR code and you will good to go",
      imglink: require("../../assets/onbordthird.png"),
    },
    {
      key: 3,
      title: "Vaccination Passport",
      subtitle:
        "Alll the documents you need now all in your mobile phone with one click ",
      imglink: require("../../assets/onbord.png"),
    },
  ];
  useEffect(() => {
    if (itemindex < onboardData.length) {
      if (refContainer.current) {
        refContainer.current.scrollToIndex({
          animated: true,
          index: itemindex,
        });
      }
    } else {
      navigation.navigate("Login");
    }
  }, [itemindex]);
  return (
    <SafeAreaView style={styles.filldiv}>
      <ImageBackground
        style={styles.imgbg}
        source={require("../../assets/lp.png")}
      >
        <FlatList
          ref={refContainer}
          data={onboardData}
          keyExtractor={(item) => item.title}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          scroll
          renderItem={({ item }) => (
            <View style={styles.myContainer}>
              <View style={styles.navigator}>
                {onboardData.map((dat, index) => (
                  <View
                    key={index}
                    style={{
                      width: w("30%"),
                      height: 10,
                      borderRadius: 10,
                      marginHorizontal: 2,
                      backgroundColor:
                        index + 1 === item?.key
                          ? "white"
                          : "rgba(255,255,255,0.2)",
                    }}
                  />
                ))}
              </View>
              <View style={styles.contentContain}>
                <View style={styles.mainContent}>
                  <Text style={styles.heading}>{item.title}</Text>
                  <Text style={styles.subHeading}>{item.subtitle}</Text>
                  <Image source={item.imglink} style={styles.onbordimg} />
                  <View style={styles.circlenumber}>
                    <Text style={styles.keytxt}>{item.key}</Text>
                  </View>
                  <View style={styles.mybtn}>
                    <NextBtn
                      BtnText={"Next"}
                      onPress={() => {
                        if (item.key === 3) {
                          navigation.navigate("Login");
                        } else {
                          setitemindex(itemindex + 1);
                        }
                      }}
                    />
                  </View>
                </View>
              </View>
            </View>
          )}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};

export default OnBoardScreen;

const styles = StyleSheet.create({
  filldiv: {
    width: "100%",
    height: "100%",
  },
  imgbg: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
  navigator: {
    width: "100%",
    height: h("15%"),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  contentContain: {
    width: "100%",
    height: h("85%"),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  myContainer: {
    width: w("100%"),
    height: h("100%"),
    overflow: "hidden",
  },
  mainContent: {
    width: "90%",
    height: "80%",
    backgroundColor: "white",
    borderRadius: h("3%"),
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "column",
    position: "relative",
  },
  mybtn: {
    position: "absolute",
    bottom: -30,
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 100000,
  },
  keytxt: {
    fontSize: h("3%"),
    color: "white",
    fontWeight: "bold",
  },
  circlenumber: {
    position: "absolute",
    top: -h("4%"),
    width: h("7%"),
    height: h("7%"),
    borderRadius: h("7%"),
    backgroundColor: "#635BD6",
    borderWidth: h("0.6%"),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "white",
  },
  onbordimg: {
    width: "100%",
    height: "50%",
    resizeMode: "contain",
  },
  heading: {
    fontSize: h("4%"),
    width: "80%",
    alignSelf: "center",
    fontWeight: "bold",
    textAlign: "center",
  },
  subHeading: {
    fontSize: h("2.1%"),
    width: "80%",
    alignSelf: "center",
    textAlign: "center",
    textTransform: "capitalize",
    color: "#919191",
  },
});
