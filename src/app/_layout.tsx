import "react-native-reanimated";
import "react-native-gesture-handler";
import { SplashScreen } from "expo-router";
import { theme } from "@/shared/theme";
import { ThemeProvider } from "styled-components/native";
import { useEffect } from "react";
import { useFonts } from "@/shared/hooks/fonts";
import { Navigation } from "@/navigation";
import { controllerUser } from "@/services/users";
export { ErrorBoundary } from "expo-router";

export const unstable_settings = {
  initialRouteName: "index",
};

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const { fontsLoaded, fontError } = useFonts();

  const AddUser = async () => {
    await controllerUser.createUser({
      fullName: "Matheus",
      email: "matheus@hotmail.com.br",
      password: "test",
      confirmPassword: "test",
    });
  };

  useEffect(() => {
    if (fontError) throw fontError;
  }, [fontError]);

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
    AddUser();
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
