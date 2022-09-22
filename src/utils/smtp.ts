import { ISentMessage } from './types';
import { AxiosResponse } from 'axios';
import { instance } from './instance';
import { getResponse } from './helpers';

export const smtp = {
  async sendMessage(message: ISentMessage): Promise<string> {
    const res: AxiosResponse<string> = await instance.post('messages', message);
    return getResponse(res);
  },
};
