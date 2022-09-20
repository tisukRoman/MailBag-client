import { AxiosResponse } from 'axios';

export const getResponse = <Data>(res: AxiosResponse<Data>) => {
  if (res.status === 200) {
    return res.data;
  } else {
    throw new Error(res.statusText);
  }
};
