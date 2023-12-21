import { Icons } from "@assets/index";
import { LineGradient } from "../styles";
import { LoginOpcionalComponent } from "./loginOpcional";
import { TextDescription } from "@/shared/style/font";
import { View } from "react-native";

export const FooterComponent = () => (
  <>
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        gap: 7,
        marginTop: 18,
        alignItems: "center",
      }}
    >
      <LineGradient
        start={{ x: 1.0, y: 0.0 }}
        end={{ x: 0.0, y: 1.0 }}
        colors={["#ffffff", "transparent"]}
      />
      <TextDescription color="greyLight">Faça login com</TextDescription>
      <LineGradient
        start={{ x: 0.0, y: 1.0 }}
        end={{ x: 1.0, y: 1.0 }}
        colors={["#ffffff", "transparent"]}
      />
    </View>
    <View style={{ flexDirection: "row", gap: 20.34, marginTop: 18 }}>
      <LoginOpcionalComponent Icon={<Icons.Rede.Google width={20} height={20} />} />
      <LoginOpcionalComponent Icon={<Icons.Rede.Apple width={20} height={20}/>} />
      <LoginOpcionalComponent Icon={<Icons.Rede.Face width={30} height={20}/>} />
    </View>
  </>
);
