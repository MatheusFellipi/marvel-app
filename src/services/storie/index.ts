import { TypeStoriesDetails } from "@/types/components/storie";
import { connection } from "../connections";
import { TypeCharactersDetails } from "@/types/components/heros";
import { TypeCreatorDetails } from "@/types/components/creator";

const base = "stories";

export const controllerStories = {
  Get: async () => {
    const { data } = await connection.GetData<TypeStoriesDetails>(base + "?");
    return data.data.results;
  },
  ById: async (id: number) => {
    const { data } = await connection.GetData<TypeStoriesDetails>(
      `${base}/${id}?`
    );
    return data.data.results;
  },
  ComicsById: async (id: number) => {
    const { data } = await connection.GetData<TypeStoriesDetails>(
      `${base}/${id}/comics?`
    );
    return data.data.results;
  },
  ComicChar: async (id: number) => {
    const { data } = await connection.GetData<TypeCharactersDetails>(
      `${base}/${id}/characters?`
    );
    return data.data.results;
  },
  ComicCreator: async (id: number) => {
    const { data } = await connection.GetData<TypeCreatorDetails>(
      `${base}/${id}/creators?`
    );
    return data.data.results;
  },
};
