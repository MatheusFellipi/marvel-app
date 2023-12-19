import { Characteristics } from './styled';
import { Dimensions, View } from 'react-native';
import { Skeleton } from 'moti/skeleton';

const { width } = Dimensions.get("screen");

export const SkeletonComponent = () => {
  return (
    <>
      <View style={{ gap: 12, marginBottom: 37 }}>
        <Skeleton colorMode="dark" width={width * 0.88} height={50} />
        <Skeleton colorMode="dark" width={width * 0.88} height={50} />
      </View>
      <Characteristics>
        <Skeleton colorMode="dark" width={50} height={50} />
        <Skeleton colorMode="dark" width={50} height={50} />
        <Skeleton colorMode="dark" width={50} height={50} />
        <Skeleton colorMode="dark" width={50} height={50} />
      </Characteristics>
      <Skeleton colorMode="dark" width={width * 0.88} height={250} />
    </>
  );
};
