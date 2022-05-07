import React from "react";
import {
  BottomTabBar,
  createBottomTabNavigator,
  BottomTabBarHeightContext,
  useBottomTabBarHeight,
} from "@react-navigation/bottom-tabs";
import {
  MaterialCommunityIcons,
  Foundation,
  FontAwesome,
  Entypo,
  MaterialIcons,
  AntDesign,
  Ionicons,
  Feather,
} from "@expo/vector-icons";
import { TouchableOpacity, View, Text } from "react-native";
import { w, h } from "react-native-responsiveness";
const Tab = createBottomTabNavigator();
import Dashboard from "../Screens/Dashboard";
import CheckInScreen from "../Screens/CheckInScreen";
import BookingScreen from "../Screens/BookingScreen";
import MapScreen from "../Screens/MapScreen";
import DummyScreen from "../Screens/DummyScreen";
import Verification from '../Screens/Verifcation';
import { useAuth } from "../providers/auth";

//
//
//
//
const CustomBottomTab = () => {
  const { state, handleLogout } = useAuth();
  const user = state.user;
  const status = state.user.isRestaurant;

  const TimerScreen = () => {
    return (
      <View
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>Trail Screen</Text>
      </View>
    );
  };
  const MenuBtn = ({ focused, text, children }) => {
    return (
      <View
        style={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          backgroundColor: focused ? "#635BD6" : "white",
          borderTopLeftRadius: h("1.5%"),
          borderTopRightRadius: h("1.5%"),
          paddingHorizontal: w("1.5%"),
        }}
      >
        {children}
        <Text
          style={{ color: focused ? "white" : "#C1C1C1", fontSize: h("1.7%") }}
        >
          {text}
        </Text>
      </View>
    );
  };
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: {
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          shadowColor: "black",
          shadowOffset: { width: 0, height: 3 },
          shadowOpacity: 0.8,
          shadowRadius: 2,
          backgroundColor: "white",
          elevation: 2,
        },
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Dashboard}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <MenuBtn focused={focused} text={"Home"}>
              <Entypo
                name="home"
                color={focused ? "white" : "#C1C1C1"}
                size={focused ? h("3%") : h("2.5%")}
              />
            </MenuBtn>
          ),
        }}
      />
      {status ? (
        <Tab.Screen
          name="CheckIn"
          component={CheckInScreen}
          options={{
            tabBarIcon: ({ color, focused }) => (
              <MenuBtn focused={focused} text={"Check In"}>
                <Ionicons
                  name="qr-code-outline"
                  color={focused ? "white" : "#C1C1C1"}
                  size={focused ? h("3%") : h("2.5%")}
                />
              </MenuBtn>
            ),
          }}
        />
      ) : (
        <Tab.Screen
          name="CheckInLogs"
          component={DummyScreen}
          options={{
            tabBarIcon: ({ color, focused }) => (
              <MenuBtn focused={focused} text={"Logs"}>
                <Ionicons
                  name="qr-code-outline"
                  color={focused ? "white" : "#C1C1C1"}
                  size={focused ? h("3%") : h("2.5%")}
                />
              </MenuBtn>
            ),
          }}
        />
      )}

      <Tab.Screen
        name="DummyScreen"
        component={MapScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <MenuBtn focused={focused} text={"Booking"}>
              <Feather
                name="calendar"
                color={focused ? "white" : "#C1C1C1"}
                size={focused ? h("3%") : h("2.5%")}
              />
            </MenuBtn>
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Verification}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <MenuBtn focused={focused} text={"Account"}>
              <MaterialCommunityIcons
                name="account-circle-outline"
                color={focused ? "white" : "#C1C1C1"}
                size={focused ? h("3%") : h("2.5%")}
              />
            </MenuBtn>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default CustomBottomTab;
