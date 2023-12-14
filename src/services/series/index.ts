import { connection } from "../connections";

const base = "series";

export const controllerSeries = {
  Get: async () => {
    const { data } = await connection.GetData<any>(base);
    return data.data.results;
  },
};
