import { AxiosResponse } from 'axios';
import { instance } from './instance';
import { IMessage } from './types';
import { getResponse } from './helpers';

export const smtp = {
  async sendMessage(message: IMessage): Promise<string> {
    const res: AxiosResponse<string> = await instance.post('messages', message);
    return getResponse(res);
  },
};
