import { AxiosResponse } from "axios";

export type DataLimitsType = {
  offset?: number;
  limit?: number;
  total?: number;
  count?: number;
};

type ResultType<D> = {
  data: {
    results: D[];
  } & DataLimitsType;
};

export type ResponseType<T> = Promise<AxiosResponse<ResultType<T>>>;