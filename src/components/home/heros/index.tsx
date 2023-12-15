import { CardCarrosselComponent } from '@/shared/components/cardCarrossel';
import { controllerCharacters } from '@/services/characters';
import { SkeletonCarrosselComponent } from '@/shared/components/cardCarrossel/skeleton';
import { SubtitleText } from '../styles';
import { TypeCharacters } from '@/types/components/heros';
import { useEffect, useState } from 'react';
import { useRouter } from 'expo-router';
import { View } from 'react-native';

export const HeroComponent = () => {
  const router = useRouter();
  const [data, setData] = useState<TypeCharacters[]>([]);
  const [loader, setLoader] = useState(true);

  const handleRoute = (id: number) => {
    router.push({
      pathname: "/hero/[id]",
      params: { id: id }
    } as never);
  };

  const getCharacters = () => {
    controllerCharacters
      .Get()
      .then((data) => {
        setData(data);
      })
      .finally(() => {
        setLoader(false);
      });
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <View>
      <SubtitleText>Heróis</SubtitleText>
      {loader && <SkeletonCarrosselComponent />}
      {!loader && (
        <CardCarrosselComponent handleRoute={handleRoute} data={data} />
      )}
    </View>
  );
};
