import { CardCarrosselComponent } from '@/shared/components/cardCarrossel';
import { controllerSeries } from '@/services/series';
import { SkeletonCarrosselComponent } from '@/shared/components/cardCarrossel/skeleton';
import { SubtitleText } from '../styles';
import { TypeCharacters } from '@/types/components/heros';
import { useEffect, useState } from 'react';
import { View } from 'react-native';

export const SerieComponent = () => {
  const [data, setData] = useState<TypeCharacters[]>([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    getSeries();
  }, []);

  const getSeries = () => {
    controllerSeries.Get().then((data) => {
      setData(data);
    }).finally(()=>{
      setLoader(false)
    });
  };

  return (
    <View>
      <SubtitleText>Séries</SubtitleText>
      {loader && <SkeletonCarrosselComponent />}
      {!loader && <CardCarrosselComponent data={data} />}
    </View>
  );
};
