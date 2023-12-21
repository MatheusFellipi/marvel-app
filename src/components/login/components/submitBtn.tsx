import { LinearGradient } from "expo-linear-gradient";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  ActivityIndicator,
} from "react-native";

export const SubmitBtnGradient = ({ onPress, loader, label }) => {
  return (
    <LinearGradient
      colors={["#ED1D2F", "#BF2EB9"]}
      start={{ x: 0.0, y: 1.0 }}
      end={{ x: 1.0, y: 1.0 }}
      style={styles.grediant}
    >
      <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
        {loader && <ActivityIndicator color={"#fff"} />}
        {!loader && <Text style={styles.buttonText}>{label}</Text>}
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  grediant: {
    height: 55,
    width: "100%",
    borderRadius: 16,
    justifyContent: "center",
    alignSelf: "center",
    paddingHorizontal: 1,
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
