import { Skeleton } from "moti/skeleton";
import { Dimensions, View } from "react-native";

const { width } = Dimensions.get("screen");

export const SkeletonCarrosselComponent = ({
  colorMode = "light",
}: {
  colorMode?: "dark" | "light";
}) => {
  return (
    <View>
      <Skeleton colorMode={colorMode} width={140} height={230} />
    </View>
  );
};
