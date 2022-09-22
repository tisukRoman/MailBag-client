import { IMailbox, IMessage } from './types';
import { AxiosResponse } from 'axios';
import { instance } from './instance';
import { getResponse } from './helpers';

export const imap = {
  async getMailBoxes(): Promise<IMailbox[]> {
    const res: AxiosResponse<IMailbox[]> = await instance.get('mailboxes');
    return getResponse(res);
  },

  async getMessages(mailbox: string): Promise<IMessage[]> {
    const res: AxiosResponse<IMessage[]> = await instance.get(
      `/mailboxes/${mailbox}`
    );
    return getResponse(res);
  },

  async getMessage(mailbox: string, id: string): Promise<string> {
    const res: AxiosResponse<string> = await instance.get(
      `/messages/${mailbox}/${id}`
    );
    return getResponse(res);
  },

  async deleteMessage(mailbox: string, id: string): Promise<string> {
    const res: AxiosResponse<string> = await instance.delete(
      `/messages/${mailbox}/${id}`
    );
    return getResponse(res);
  },
};
