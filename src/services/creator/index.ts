import { connection } from '../connections';
import { TypeComicsDetails } from '@/types/components/comics';
import { TypeCreatorDetails } from '@/types/components/creator';
import { TypeEventsDetails } from '@/types/components/events';
import { TypeStoriesDetails } from '@/types/components/story';

const base = "creators";

export const controllerCreator = {
  Get: async () => {
    const { data } = await connection.GetData<TypeCreatorDetails>(base + "?");
    return data.data.results;
  },
  ById: async (id: number) => {
    const { data } = await connection.GetData<TypeCreatorDetails>(
      `${base}/${id}?`
    );
    return data.data.results;
  },
  Comics: async (id: number) => {
    const { data } = await connection.GetData<TypeComicsDetails>(
      `${base}/${id}/comics?`
    );
    return data.data.results;
  },
  Stories: async (id: number) => {
    const { data } = await connection.GetData<TypeStoriesDetails>(
      `${base}/${id}/stories?`
    );
    return data.data.results;
  },
  Events: async (id: number) => {
    const { data } = await connection.GetData<TypeEventsDetails>(
      `${base}/${id}/events?`
    );
    return data.data.results;
  },
};
