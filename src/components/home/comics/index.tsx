import { CardCarrosselComponent } from '@/shared/components/cardCarrossel';
import { controllerComics } from '@/services/comics';
import { SubtitleText } from '../styles';
import { TypeCharacters } from '@/types/components/heros';
import { useEffect, useState } from 'react';
import { View } from 'react-native';

export default function ComicComponent() {
  const [data, setData] = useState<TypeCharacters[]>([]);

  useEffect(() => {
    getComics();
  }, []);

  const getComics = () => {
    controllerComics.Get().then((data) => {
      setData(data);
    });
  };

  return (
    <View>
      <SubtitleText>Quadrinhos</SubtitleText>
      <CardCarrosselComponent data={data} />
    </View>
  );
}
