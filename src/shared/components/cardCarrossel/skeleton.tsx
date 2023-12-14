import { Skeleton } from "moti/skeleton";
import { SkeletonCarrossel } from "./styles";
import { Dimensions } from "react-native";

const { width } = Dimensions.get("screen");

export const SkeletonCarrosselComponent = () => {
  return (
    <SkeletonCarrossel>
      <Skeleton colorMode={"light"} width={140} height={230} />
      <Skeleton colorMode={"light"} width={140} height={230} />
      <Skeleton colorMode={"light"} width={140} height={230} />
    </SkeletonCarrossel>
  );
};
