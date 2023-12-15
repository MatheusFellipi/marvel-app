import { ReactNode } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, View } from "react-native";
import { useTheme } from "styled-components/native";

type Props = {
  children: ReactNode;
  bgColor?: string;
};

export function Scroll({ children, bgColor }: Readonly<Props>) {
  const theme = useTheme();
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
      testID="layout"
      edges={["left", "right"]}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            backgroundColor: bgColor ?? theme.colors.white,
            flex: 1,
            paddingBottom: 14
          }}
        >
          <View
            style={{
              backgroundColor: bgColor ?? theme.colors.white,
              height: 400,
              position: "absolute",
              top: -400,
              left: 0,
              right: 0,
            }}
          />
          {children}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
