import { TextComponent } from "@/shared/components/text";
import { ResultType } from "@/types/components/search";
import { CardVersion, Img, Profile } from "../styled";

type Props = {
  data?: ResultType;
  secondary?: boolean;
};

export const CardVersionHeroComponent = ({ data, secondary }: Props) => (
  <CardVersion secondary={secondary}>
    <Img>
      <Profile
        style={{
          flex: 1,
          width: 60,
          borderTopLeftRadius: 16,
          borderBottomLeftRadius: 16,
        }}
        source={`${data?.thumbnail?.path}/portrait_fantastic.${data?.thumbnail?.extension}`}
        transition={1000}
      />
    </Img>
    <TextComponent
      fontSize={16}
      TextColor="white"
      fontFamily="Poppins_600SemiBold"
    >
      {data?.name}
    </TextComponent>
  </CardVersion>
);
