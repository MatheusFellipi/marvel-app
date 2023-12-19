import { connection } from '../connections';
import { TypeComicsDetails } from '@/types/components/comics';
import { TypeEventsDetails } from '@/types/components/events';
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
  CharEvents: async (id: number) => {
    const { data } = await connection.GetData<TypeEventsDetails>(
      `${base}/${id}/events?`
    );
    return data.data.results;
  },
};
