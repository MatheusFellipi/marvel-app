import { TypeCreatorDetails } from "@/types/components/creator";
import { connection } from "../connections";
import { TypeComicsDetails } from "@/types/components/comics";
import { TypeSeriesDetails } from "@/types/components/series";
import { TypeEventsDetails } from "@/types/components/events";

const base = "series";

export const controllerSeries = {
  Get: async () => {
    const { data } = await connection.GetData<TypeSeriesDetails>(base + "?");
    return data.data.results;
  },
  ById: async (id: number) => {
    const { data } = await connection.GetData<TypeSeriesDetails>(
      `${base}/${id}?`
    );
    return data.data.results;
  },
  ComicsSerie: async (id: number) => {
    const { data } = await connection.GetData<TypeComicsDetails>(
      `${base}/${id}/comics?`
    );
    return data.data.results;
  },
  ComicCreator: async (id: number) => {
    const { data } = await connection.GetData<TypeCreatorDetails>(
      `${base}/${id}/creators?`
    );
    return data.data.results;
  },
  ComicEvents: async (id: number) => {
    const { data } = await connection.GetData<TypeEventsDetails>(
      `${base}/${id}/events?`
    );
    return data.data.results;
  },
};
