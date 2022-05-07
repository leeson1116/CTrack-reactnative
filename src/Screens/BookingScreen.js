import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import MainHeader from "../Components/MainHeader";
import { w, h } from "react-native-responsiveness";
import { Entypo } from "@expo/vector-icons";
import AppButton from "../Components/AppButton";
import { AntDesign } from "@expo/vector-icons";
import DosageSelector from "../Components/DosageSelector";
import {
  Calendar,
  CalendarList,
  Agenda,
  LocaleConfig,
} from "react-native-calendars";
import TimeSelect from "../Components/TimeSelect";
const BookingScreen = ({ navigation }) => {
  const [selectedTime, setselectedTime] = useState("");
  const [selected, setselected] = useState(0);
  const [seletedDate, setseletedDate] = useState("2022-04-23");
  const onClick = (data) => {
    setselected(data);
    console.log(data);
  };
  return (
    <SafeAreaView style={styles.filldiv}>
      <ImageBackground
        style={styles.imgbg}
        source={require("../../assets/lp.png")}
      >
        <ScrollView>
          <MainHeader
            HeaderText={"Book Appointment"}
            onPress={() => navigation.goBack()}
          />
          <View
            style={{
              width: "97%",
              alignSelf: "center",
              backgroundColor: "white",
              borderRadius: h("2%"),
              paddingVertical: h("4%"),
              display: "flex",
              alignItems: "center",
              marginBottom: h("2%"),
            }}
          >
            <View style={{ width: "100%", flex: 1, marginBottom: 10 }}>
              <View
                style={{
                  width: w("92%"),
                  height: h("16%"),
                  borderRadius: h("2%"),
                  borderWidth: 1,
                  borderColor: "#eeeeee",
                  alignSelf: "center",
                  marginBottom: h("1.5%"),
                  overflow: "hidden",
                }}
              >
                <View
                  style={{
                    width: "100%",
                    height: h("16%"),
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "row",
                  }}
                >
                  <View
                    style={{
                      width: w("20%"),
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      paddingHorizontal: h("0.4%"),
                    }}
                  >
                    <Image
                      style={styles.img1}
                      source={require("../../assets/h1.png")}
                    />
                  </View>
                  <View
                    style={{
                      width: w("72%"),
                      height: "100%",
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "space-evenly",
                      flexDirection: "column",
                      paddingLeft: h("0.7%"),
                    }}
                  >
                    <Text style={styles.vacTextHeader}>Ibnu Sina Hospital</Text>
                    <Text style={styles.vacTextHeader2}>
                      Kembang Harum, Pasir Penyu, Indragiri Hulu Regency, Riau
                      29353, Indonesia
                    </Text>
                    <TouchableOpacity style={styles.mapBtn}>
                      <Entypo
                        name="location-pin"
                        size={h("2.5%")}
                        color="#5952D0"
                      />
                      <Text
                        style={{
                          color: "#5952D0",
                          fontSize: h("2%"),
                          fontWeight: "bold",
                        }}
                      >
                        Open Maps
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <View style={styles.mainConat}>
                <View style={styles.miniConti}>
                  <Text style={styles.mainHeading}>Requirements</Text>
                  <View style={styles.learnMorebtn}>
                    <Text style={styles.btntxt}>Learn more</Text>
                    <AntDesign name="right" size={h("2%")} color="#5952D0" />
                  </View>
                </View>
                <View style={styles.miniConti}>
                  <Text style={styles.mainHeading}>Sinovac vaccine</Text>
                  <View style={styles.learnMorebtn}>
                    <Text style={styles.btntxt}>Detail Vaccine</Text>
                    <AntDesign name="right" size={h("2%")} color="#5952D0" />
                  </View>
                </View>
              </View>
              <Text style={styles.selecthead}>Pick a date and time</Text>
              <View
                style={{
                  width: w("92%"),
                  backgroundColor: "black",
                  alignSelf: "center",
                  marginBottom: h("2%"),
                }}
              >
                <Calendar
                  current={new Date().toDateString()}
                  onDayPress={(day) => {
                    console.log("selected day", day);
                    setseletedDate(day.dateString);
                  }}
                  theme={{
                    backgroundColor: "#ffffff",
                    calendarBackground: "#ffffff",
                    textSectionTitleColor: "#b6c1cd",
                    textSectionTitleDisabledColor: "#d9e1e8",
                    selectedDayBackgroundColor: "#00adf5",
                    selectedDayTextColor: "#ffffff",
                    todayTextColor: "#5952D0",
                    dayTextColor: "#2d4150",
                    textDisabledColor: "#d9e1e8",
                    dotColor: "#00adf5",
                    selectedDotColor: "#5952D0",
                    arrowColor: "#ffff",
                    disabledArrowColor: "#d9e1e8",
                    monthTextColor: "#ffffff",
                    indicatorColor: "blue",
                    textDayFontFamily: "monospace",
                    textMonthFontFamily: "monospace",
                    textDayHeaderFontFamily: "monospace",
                    textDayFontWeight: "300",
                    textMonthFontWeight: "bold",
                    textDayHeaderFontWeight: "300",
                    textDayFontSize: 16,
                    textMonthFontSize: h("2.5%"),
                    textDayHeaderFontSize: 16,
                  }}
                  markingType="dot"
                  monthFormat={"dd MMM, yyyy"}
                  hideExtraDays={true}
                  markedDates={{
                    [seletedDate]: {
                      selected: true,
                      marked: true,
                      selectedColor: "#5952D0",
                    },
                  }}
                  headerStyle={{ backgroundColor: "#5952D0" }}
                  firstDay={1}
                  showWeekNumbers={false}
                  onPressArrowLeft={(subtractMonth) => subtractMonth()}
                  onPressArrowRight={(addMonth) => addMonth()}
                  disableAllTouchEventsForDisabledDays={true}
                  enableSwipeMonths={true}
                />
              </View>
              <TimeSelect
                selected={selectedTime}
                onPress={(dat) => setselectedTime(dat)}
              />
              <Text style={styles.selecthead}>Select doses</Text>
              <DosageSelector selected={selected} onPress={onClick} />
              <AppButton
                BtnText={"Book appointment"}
                onPress={() => {
                  navigation.navigate("PersonalDetails");
                }}
              />
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default BookingScreen;

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
  img1: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  vacTextHeader: {
    color: "black",
    fontSize: h("2.2%"),
    fontWeight: "bold",
  },
  vacTextHeader2: {
    color: "#0003",
    fontSize: h("2%"),
    width: "98.4%",
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
  miniConti: {
    width: "47%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "column",
    borderRadius: h("2%"),
    borderWidth: 1,
    borderColor: "#eeeeee",
  },
  mainConat: {
    width: w("92%"),
    height: h("10%"),
    display: "flex",
    justifyContent: "space-evenly",
    flexDirection: "row",
    alignSelf: "center",
    marginBottom: h("1.5%"),
    overflow: "hidden",
  },
  mainHeading: {
    fontSize: h("2.2%"),
    fontWeight: "bold",
    width: "87%",
  },
  learnMorebtn: {
    width: "87%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
  },
  btntxt: {
    fontSize: h("1.7%"),
    color: "#5952D0",
    marginRight: 5,
  },
  selecthead: {
    width: "95%",
    fontSize: h("2.7%"),
    fontWeight: "bold",
    marginVertical: h("2%"),
    marginLeft: h("2%"),
  },
});
