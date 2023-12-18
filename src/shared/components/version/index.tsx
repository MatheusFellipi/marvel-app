import { CardVersionHeroComponent } from './cardVersion';
import { Container } from './styled';
import { ResultType } from '@/types/components/search';
import { TouchableOpacity } from 'react-native';
import { TypeCharactersDetails } from '@/types/components/heros';
import { useRouter } from 'expo-router';

type Props = {
  data?: ResultType[];
  current?: TypeCharactersDetails;
};

export const VersionHeroComponent = ({ data, current }: Props) => {
  const router = useRouter();
  const handleRoute = (id: number) =>
    router.push({ pathname: "hero/[id]", params: { id: id } });

  return (
    <Container>
      {data?.map((item) => (
        <TouchableOpacity key={item.id * 0.4} onPress={() => handleRoute(item.id)}>
          <CardVersionHeroComponent secondary={item.id === current?.id} data={item} />
        </TouchableOpacity>
      ))}
    </Container>
  );
};
