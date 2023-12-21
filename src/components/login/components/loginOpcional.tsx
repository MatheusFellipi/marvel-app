import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, TouchableOpacity } from "react-native";

export const LoginOpcionalComponent = ({ Icon }: any) => {
  return (
    <LinearGradient
      colors={["#e4e4e4", "#868686", "#6d6c6c", "#6d6c6c", "#8b8b8b", "#e7e7e7"]}
      start={{ x: 0.0, y: 1.0 }}
      end={{ x: 1.0, y: 1.0 }}
      style={styles.grediant}
    >
      <LinearGradient
        colors={["#6d6c6c", "#494949", "#0e0e0e"]}
        start={{ x: 0.0, y: 1.0 }}
        end={{ x: 1.0, y: 1.0 }}
        style={styles.grediant2}
      >
        <TouchableOpacity style={styles.buttonContainer}>
         {Icon}
        </TouchableOpacity>
      </LinearGradient>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  grediant: {
    width: 58.1,
    height: 44,
    borderRadius: 8.854,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 1,
  },
  grediant2: {
    width: 57,
    height: 40,
    borderRadius: 8.854,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff0",
    margin: 1,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 17.918,
  },
});
