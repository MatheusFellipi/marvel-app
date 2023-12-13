import { connection } from "../connections";

const base = "characters";

export const controllerCharacters = {
  Get: async () => {
    const { data } = await connection.GetData<any>(base);
    return data;
  },
};
