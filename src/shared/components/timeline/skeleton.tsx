import { Skeleton } from "moti/skeleton";
import { Dimensions, View } from "react-native";

const { width } = Dimensions.get("screen");

export const SkeletonComponent = () => (
  <View style={{ marginVertical: 37, paddingHorizontal: 24 }}>
    <Skeleton colorMode="dark" width={width * 0.88} height={230} />
  </View>
);
