import { TypeCharactersDetails } from "@/types/components/heros";
import { CardVersionHeroComponent } from "./cardVersion";
import { Container, ListAll } from "../styled";
import { ResultType } from "@/types/components/search";
import { Icons } from "@assets/index";
import { TextComponent } from "@/shared/components/text";
import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

type Props = {
  data?: ResultType[];
  current?: TypeCharactersDetails;
};

export const VersionHeroComponent = ({ data, current }: Props) => {
  const router = useRouter();
  return (
    <Container>
      <CardVersionHeroComponent secondary={true} data={current} />
      {data?.map((item) => (
        <>
          {item.id !== current?.id && (
            <TouchableOpacity
              key={item.id}
              onPress={() => {
                router.push({
                  pathname: "hero/[id]",
                  params: { id: item.id },
                });
              }}
            >
              <CardVersionHeroComponent data={item} />
            </TouchableOpacity>
          )}
        </>
      ))}
      {data && data?.length > 3 && (
        <ListAll>
          <TextComponent TextColor="white" fontSize={12}>
            Lista completa
          </TextComponent>
          <Icons.Nav.Arrow />
        </ListAll>
      )}
    </Container>
  );
};
