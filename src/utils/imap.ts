import { AxiosResponse } from 'axios';
import { instance } from './instance';
import { IMailbox } from './types';

export const imap = {
  async getMailBoxes(): Promise<IMailbox[]> {
    try {
      const res: AxiosResponse<IMailbox[]> = await instance.get('mailboxes');
      if (res.status === 200) {
        return res.data;
      } else {
        throw Error(res.statusText);
      }
    } catch (err) {
      throw err;
    }
  },
};
