import { CardVersion, Img, Profile } from "./styled";
import { ResultType } from "@/types/components/search";
import { TextSemiBold } from "@/shared/style/font";

type Props = {
  data?: ResultType;
  secondary?: boolean;
};

export const CardVersionHeroComponent = ({ data, secondary }: Props) => (
  <CardVersion secondary={secondary}>
    <Img>
      <Profile
        style={{}}
        source={`${data?.thumbnail?.path}/portrait_fantastic.${data?.thumbnail?.extension}`}
        transition={1000}
      />
    </Img>
    <TextSemiBold>{data?.name}</TextSemiBold>
  </CardVersion>
);
