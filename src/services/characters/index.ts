import { TypeCharacters } from "@/types/components/heros";
import { connection } from "../connections";

const base = "characters";

export const controllerCharacters = {
  Get: async () => {
    const { data } = await connection.GetData<TypeCharacters>(base);
    return data.data.results;
  },
};
