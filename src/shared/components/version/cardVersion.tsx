import { CardVersion, Img, Profile } from './styled';
import { ResultType } from '@/types/components/search';
import { TextComponent } from '@/shared/components/text';

type Props = {
  data?: ResultType;
  secondary?: boolean;
};

export const CardVersionHeroComponent = ({ data, secondary }: Props) => (
  <CardVersion secondary={secondary}>
    <Img>
      <Profile
        style={{
          
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
