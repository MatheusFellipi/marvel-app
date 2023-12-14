import { ResponseType } from "@/types/api";
import api from "./api";

type ReturnType<T> = ResponseType<T>;

class Connection {
  async GetData<T>(url_request: string): ReturnType<T> {
    return await api.get(url_request);
  }
  async PostData<T, D>(url_request: string, data: D): ReturnType<T> {
    return await api.post(url_request, data);
  }
  async UpdateData<T, D>(url_request: string, data: D): ReturnType<T> {
    return await api.put(url_request, data);
  }
  async PatchData<T, D>(url_request: string, data: D): ReturnType<T> {
    return await api.patch(url_request, data);
  }
  async DeleteData<T>(url_request: string): ReturnType<T> {
    return await api.delete(url_request);
  }
}

export const connection = new Connection();
