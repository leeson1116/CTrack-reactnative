import { StatusBar } from "react-native";
import StackNavigation from "./src/navigation/StackNavigation";
import BookingScreen from "./src/Screens/BookingScreen";
import OnBoardScreen from "./src/Screens/OnBoardScreen";
import PreventionScreen from "./src/Screens/PreventionScreen";

export default function App() {
  return (
    <>
      <StatusBar />
      <StackNavigation />
    </>
  );
}
