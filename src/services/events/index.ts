import { TypeEventsDetails } from "@/types/components/events";
import { connection } from "../connections";
import { TypeComicsDetails } from "@/types/components/comics";

const base = "events";

export const controllerEvents = {
  Get: async () => {
    const { data } = await connection.GetData<any>(base + "?");
    return data.data.results;
  },
  ById: async (id: number) => {
    const { data } = await connection.GetData<TypeEventsDetails>(
      `${base}/${id}?`
    );
    return data.data.results;
  },
  ComicChar: async (id: number) => {
    const { data } = await connection.GetData<any>(`${base}/${id}/characters?`);
    return data.data.results;
  },
  ComicCreator: async (id: number) => {
    const { data } = await connection.GetData<any>(`${base}/${id}/creators?`);
    return data.data.results;
  },
  ComicComics: async (id: number) => {
    const { data } = await connection.GetData<TypeComicsDetails>(
      `${base}/${id}/comics?`
    );
    return data.data.results;
  },
};
