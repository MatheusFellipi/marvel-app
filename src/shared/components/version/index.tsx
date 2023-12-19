import { CardVersionHeroComponent } from "./cardVersion";
import { Container } from "./styled";
import { ResultType } from "@/types/components/search";
import { Skeleton } from "moti/skeleton";
import { Dimensions, TouchableOpacity, View } from "react-native";
import { TypeCharactersDetails } from "@/types/components/heros";
import { useRouter } from "expo-router";

type Props = {
  data?: ResultType[];
  current?: TypeCharactersDetails;
  loader?: boolean;
};
const { width } = Dimensions.get("screen");

export const VersionHeroComponent = ({ data, current, loader }: Props) => {
  const router = useRouter();
  const handleRoute = (id: number) =>
    router.push({ pathname: "hero/[id]", params: { id: id } });

  return (
    <Container>
      {loader && (
        <View style={{ gap:16 }}>
          <Skeleton colorMode="dark" width={width * 0.88} height={50} />
          <Skeleton colorMode="dark" width={width * 0.88} height={50} />
          <Skeleton colorMode="dark" width={width * 0.88} height={50} />
        </View>
      )}
      {!loader &&
        data?.map((item) => (
          <TouchableOpacity
            key={item.id * 0.4}
            onPress={() => handleRoute(item.id)}
          >
            <CardVersionHeroComponent
              secondary={item.id === current?.id}
              data={item}
            />
          </TouchableOpacity>
        ))}
    </Container>
  );
};
