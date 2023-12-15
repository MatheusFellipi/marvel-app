import { connection } from '../connections';
import { TypeComicsDetails } from '@/types/components/comics';
import {
  TypeCharacters,
  TypeCharactersDetails,
} from "@/types/components/heros";

const base = "characters";

export const controllerCharacters = {
  Get: async () => {
    const { data } = await connection.GetData<TypeCharacters>(base+"?");
    return data.data.results;
  },
  ById: async (id: number) => {
    const { data } = await connection.GetData<TypeCharactersDetails>(
      `${base}/${id}?`
    );
    return data.data.results;
  },
  CharComics: async (id: number) => {
    const { data } = await connection.GetData<TypeComicsDetails>(
      `${base}/${id}/comics?`
    );
    return data.data.results;
  },
};
