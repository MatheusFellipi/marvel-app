import { TypeCreatorDetails } from "@/types/components/creator";
import { connection } from "../connections";
import { TypeCharactersDetails } from "@/types/components/heros";
import { TypeStoriesDetails } from "@/types/components/storie";
import { TypeComicsDetails } from "@/types/components/comics";

const base = "series";

export const controllerSeries = {
  Get: async () => {
    const { data } = await connection.GetData<TypeStoriesDetails>(base + "?");
    return data.data.results;
  },
  ById: async (id: number) => {
    const { data } = await connection.GetData<TypeStoriesDetails>(`${base}/${id}?`);
    return data.data.results;
  },
  ComicsSerie: async (id: number) => {
    const { data } = await connection.GetData<TypeComicsDetails>(
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
