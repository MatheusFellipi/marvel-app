import { connection } from "../connections";

const base = "events";

export const controllerEvents = {
  Get: async () => {
    const { data } = await connection.GetData<any>(base);
    return data.data.results;
  },
};
