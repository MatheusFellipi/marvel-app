import "react-native-reanimated";
import "react-native-gesture-handler";
import { SplashScreen } from "expo-router";
import { theme } from "@/shared/theme";
import { ThemeProvider } from "styled-components/native";
import { useEffect } from "react";
import { useFonts } from "@/shared/hooks/fonts";
import { Navigation } from "@/navigation";
export { ErrorBoundary } from "expo-router";

export const unstable_settings = {
  initialRouteName: "index",
};

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const { fontsLoaded, fontError } = useFonts();

  useEffect(() => {
    if (fontError) throw fontError;
  }, [fontError]);

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <Navigation />
    </ThemeProvider>
  );
}
