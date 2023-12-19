import { Skeleton } from "moti/skeleton";
import { Dimensions, View } from "react-native";

const { width } = Dimensions.get("screen");

export const SkeletonComponent = () => (
  <View style={{ paddingHorizontal: 6, marginTop: 14, gap: 16 }}>
    <Skeleton colorMode="light" width={width*0.97} height={160} />
    <Skeleton colorMode="light" width={width*0.97} height={160} />
    <Skeleton colorMode="light" width={width*0.97} height={160} />
  </View>
);
