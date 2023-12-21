import { CardSearch } from "./styles";
import { View, AccessibilityInfo } from "react-native";
import { useTheme } from "styled-components";
import { Image } from "expo-image";
import { CardSearchProps } from "@/types/components/search";
import { Icons } from "@assets/index";
import {
  TextDescription,
  TextDescriptionPoppinsLight,
} from "@/shared/style/font";

export const CardSearchComponent = ({
  item,
  handleNavigation,
}: CardSearchProps) => {
  const theme = useTheme();
  const url = `${item?.thumbnail?.path}/portrait_fantastic.${item?.thumbnail?.extension}`;

  const description = () => {
    let title =
      item?.description !== null && item?.description.length > 0
        ? item?.description
        : "Não possui descrição";

    if (title.length > 200) {
      title = title.slice(0, 90) + " ...";
    }
    return title;
  };

  const title = () => {
    let title = item?.name ?? item?.title ?? "";
    if (title !== null && title.length > 20) {
      title = title.slice(0, 15) + "...";
    }
    return title;
  };

  const handlePress = () => handleNavigation(item.id);

  const handleAccessibility = () => {
    AccessibilityInfo.announceForAccessibility(
      `Cartão para ${item.name ?? item.title}. Toque duplo para ver detalhes.`
    );
  };

  return (
    <CardSearch
      onPress={handlePress}
      onAccessibilityTap={handleAccessibility}
      accessibilityRole="button"
      accessibilityLabel={`Cartão para ${
        item?.name ?? item?.title
      }. Toque duplo para ver detalhes.`}
    >
      <View
        style={{
          width: 100,
          height: "100%",
        }}
      >
        <Image
          style={{ flex: 1, width: "100%", borderRadius: 16 }}
          source={url}
          transition={1000}
          accessible
        />
      </View>
      <View>
        <TextDescription size={20}>{title()}</TextDescription>
        <View
          style={{
            maxWidth: 230,
          }}
        >
          <TextDescriptionPoppinsLight>
            {description()}
          </TextDescriptionPoppinsLight>
        </View>
      </View>
      <Icons.Nav.Arrow />
    </CardSearch>
  );
};
