import { useNavigation } from "expo-router";
import { Button, View } from "react-native";

export default function Login() {
  const navigation = useNavigation();

  return (
    <View
      style={{
        marginTop: 34,
      }}
    >
      <Button
        title="home"
        onPress={() => navigation.navigate("home/index" as never)}
      />
    </View>
  );
}
