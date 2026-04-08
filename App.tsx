import * as SplashScreen from "expo-splash-screen";
import {
  useFonts,
  OpenSans_300Light,
  OpenSans_400Regular,
  OpenSans_600SemiBold,
} from "@expo-google-fonts/open-sans";
import HomeScreen from "./src/screens/HomeScreen";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    OpenSans_300Light,
    OpenSans_400Regular,
    OpenSans_600SemiBold,
  });

  const onLayout = () => {
    if (fontsLoaded) SplashScreen.hideAsync();
  };

  if (!fontsLoaded) return null;

  return <HomeScreen onLayout={onLayout} />;
}
