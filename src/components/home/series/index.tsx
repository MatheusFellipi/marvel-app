import { CardCarrosselComponent } from '@/shared/components/cardCarrossel';
import { controllerSeries } from '@/services/series';
import { SkeletonCarrosselComponent } from '@/shared/components/cardCarrossel/skeleton';
import { SubtitleText } from '../styles';
import { TypeCharacters } from '@/types/components/heros';
import { useEffect, useState } from 'react';
import { useNavigation } from 'expo-router';
import { View } from 'react-native';

export const SerieComponent = () => {
  const { navigate } = useNavigation();
  const [data, setData] = useState<TypeCharacters[]>([]);
  const [loader, setLoader] = useState(true);

  const handleRoute = (id: number) => {
    navigate(`hero/${id}` as never);
  };

  const getSeries = () => {
    controllerSeries
      .Get()
      .then((data) => {
        setData(data);
      })
      .finally(() => {
        setLoader(false);
      });
  };
  useEffect(() => {
    getSeries();
  }, []);
  return (
    <View>
      <SubtitleText>Séries</SubtitleText>
      {loader && <SkeletonCarrosselComponent />}
      {!loader && (
        <CardCarrosselComponent handleRoute={handleRoute} data={data} />
      )}
    </View>
  );
};
