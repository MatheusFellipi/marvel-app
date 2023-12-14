import { CardCarrosselComponent } from '@/shared/components/cardCarrossel';
import { controllerCharacters } from '@/services/characters';
import { SkeletonCarrosselComponent } from '@/shared/components/cardCarrossel/skeleton';
import { SubtitleText } from '../styles';
import { TypeCharacters } from '@/types/components/heros';
import { useEffect, useState } from 'react';
import { View } from 'react-native';

export const HeroComponent = () => {
  const [data, setData] = useState<TypeCharacters[]>([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    // getCharacters();
  }, []);

  const getCharacters = () => {
    controllerCharacters
      .Get()
      .then((data) => {
        setData(data);
      })
      .finally(() => {
        setLoader(true);
      });
  };

  return (
    <View>
      <SubtitleText>Heróis</SubtitleText>
      {loader && <SkeletonCarrosselComponent />}
      {!loader && <CardCarrosselComponent data={data} />}
    </View>
  );
};
