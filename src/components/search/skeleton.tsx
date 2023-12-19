import { Skeleton } from "moti/skeleton";
import { Dimensions, View } from "react-native";

const { width } = Dimensions.get("screen");

export const SkeletonCarrosselComponent = () => (
  <View>
      <Skeleton colorMode="light" width={140} height={230} />
    </View>
)
