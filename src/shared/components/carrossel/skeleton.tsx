import { Skeleton } from "moti/skeleton";
import { SkeletonCarrossel } from "./styles";

export const SkeletonCarrosselComponent = ({
  colorMode = "light",
}: {
  colorMode?: "dark" | "light";
}) => {
  return (
    <SkeletonCarrossel>
      <Skeleton colorMode={colorMode} width={140} height={230} />
      <Skeleton colorMode={colorMode} width={140} height={230} />
      <Skeleton colorMode={colorMode} width={140} height={230} />
    </SkeletonCarrossel>
  );
};
