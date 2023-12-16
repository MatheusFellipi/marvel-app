import { controllerComics } from "@/services/comics";
import { TextComponent } from "@/shared/components/text";
import { TypeCharactersDetails } from "@/types/components/heros";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import { BtnStories } from "../styled";

type Props = {
  idComic?: number;
};

export const ComicStoriesComponent = ({ idComic }: Props) => {
  const router = useRouter();
  const [data, setData] = useState<TypeCharactersDetails[]>([]);

  const details = (idComic: number) => {
    controllerComics.ComicStories(idComic).then((data) => {
      setData(data);
    });
  };

  useEffect(() => {
    details(idComic as any);
  }, [idComic]);

  return (
    <View
      style={{
        paddingHorizontal: 24,
      }}
    >
      <FlatList
        data={data}
        scrollEnabled={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <BtnStories
            onPress={() =>
              router.push({
                pathname: "stories/[id]",
                params: { id: item.id },
              })
            }
          >
            <TextComponent
              fontSize={12}
              fontFamily="Poppins_500Medium"
              TextColor="white"
            >
              {item?.title ?? ""}
            </TextComponent>
          </BtnStories>
        )}
      />
    </View>
  );
};
