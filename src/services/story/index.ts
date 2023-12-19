import { connection } from '../connections';
import { TypeCharactersDetails } from '@/types/components/heros';
import { TypeComicsDetails } from '@/types/components/comics';
import { TypeCreatorDetails } from '@/types/components/creator';
import { TypeStoriesDetails } from '@/types/components/story';

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
  Comics: async (id: number) => {
    const { data } = await connection.GetData<TypeComicsDetails>(
      `${base}/${id}/comics?`
    );
    return data.data.results;
  },
  Chars: async (id: number) => {
    const { data } = await connection.GetData<TypeCharactersDetails>(
      `${base}/${id}/characters?`
    );
    return data.data.results;
  },
  Creators: async (id: number) => {
    const { data } = await connection.GetData<TypeCreatorDetails>(
      `${base}/${id}/creators?`
    );
    return data.data.results;
  },
};
