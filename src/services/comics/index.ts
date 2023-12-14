import { connection } from "../connections";

const base = "comics";

export const controllerComics = {
  Get: async () => {
    const { data } = await connection.GetData<any>(base);
    return data.data.results;
  },
};
