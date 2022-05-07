import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { enableScreens } from "react-native-screens";
import Splash from "../Screens/Splash";
import Login from "../Screens/Login";
import Signup from "../Screens/Signup";
import Dashboard from "../Screens/Dashboard";
import MapScreen from "../Screens/MapScreen";
import SelectVaccine from "../Screens/SelectVaccine";
import Medicine from "../Screens/Medicine";
import PersonalDetails from "../Screens/PersonalDetails";
import OnBoardScreen from "../Screens/OnBoardScreen";
import CustomBottomTab from "./CustomBottomTab";
import BookingScreen from "../Screens/BookingScreen";
import DummyScreen from "../Screens/DummyScreen";
import BookSucess from "../Screens/BookSucess";
import CheckInScreen from "../Screens/CheckInScreen";
import Verifcation from "../Screens/Verifcation";
import PreventionScreen from "../Screens/PreventionScreen";
//IMPORT ROUTES



import AuthProvider from "../providers/auth";

enableScreens();

const Stack = createNativeStackNavigator();

function StackNavigation(props) {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="Onboard" component={OnBoardScreen} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Dashboard" component={CustomBottomTab} />
          <Stack.Screen name="Prevention" component={PreventionScreen} />
          <Stack.Screen name="Dummy" component={DummyScreen} />
          <Stack.Screen name="MapScreen" component={MapScreen} />
          <Stack.Screen name="SelectVaccine" component={SelectVaccine} />
          <Stack.Screen name="Medicine" component={Medicine} />
          <Stack.Screen name="PersonalDetails" component={PersonalDetails} />
          <Stack.Screen name="BookingScreen" component={BookingScreen} />
          <Stack.Screen name="BookSucess" component={BookSucess} />
          <Stack.Screen name="CheckInScreen" component={CheckInScreen} />
          <Stack.Screen name="Verifcation" component={Verifcation} />
        </Stack.Navigator>
      </NavigationContainer>

    </AuthProvider>

  );
}



export default StackNavigation;

