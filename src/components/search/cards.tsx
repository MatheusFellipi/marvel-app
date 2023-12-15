import { CardSearch } from "./styles";
import { View } from "react-native";
import { TextComponent } from "@/shared/components/text";
import { useTheme } from "styled-components";
import { Image } from "expo-image";
import { CardSearchProps } from "@/types/components/search";

export const CardSearchComponent = ({ item }: CardSearchProps) => {
  const theme = useTheme();
  const url = `${item?.thumbnail?.path}/portrait_fantastic.${item?.thumbnail?.extension}`;
  return (
    <CardSearch>
      <View>
        <Image style={{}} source={url} transition={1000} />
      </View>
      <View>
        <TextComponent
          fontSize={20}
          TextColor={theme.colors.white}
          fontFamily="Poppins_500Medium"
        >
          {item?.name ?? item?.title}
        </TextComponent>
        <TextComponent
          fontSize={13}
          TextColor={theme.colors.white}
          fontFamily="Poppins_300Light"
        >
          {item?.description}
        </TextComponent>
      </View>
    </CardSearch>
  );
};
