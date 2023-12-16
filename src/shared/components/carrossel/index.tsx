import { CardCarrosselComponent } from './list';
import { PropsCarrossel } from '@/types/shared/components/carrossel';
import { SkeletonCarrosselComponent } from './skeleton';
import { SubtitleText } from './styles';
import { View } from 'react-native';

export const CarrosselComponent = ({
  loader,
  data,
  handleRoute,
  title,
}: PropsCarrossel) => {
  return (
    <View>
      <SubtitleText>{title}</SubtitleText>
      {loader && <SkeletonCarrosselComponent />}
      {!loader && (
        <CardCarrosselComponent handleRoute={handleRoute} data={data} />
      )}
    </View>
  );
};
