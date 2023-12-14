import { ResponseType } from "@/types/api";
import api from "./api";

type ReturnType<T> = ResponseType<T>;

class Connection {
  async GetData<T>(url_request: string): ReturnType<T> {
    return await api.get(url_request);
  }
}

export const connection = new Connection();
