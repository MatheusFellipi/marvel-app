import { ResultType } from "@/types/components/search";
import { connection } from "../connections";

export const controllerSearch = {
  Get: async (filter: string) => {
    const { data } = await connection.GetData<ResultType>(filter);
    return data.data.results;
  },
};
