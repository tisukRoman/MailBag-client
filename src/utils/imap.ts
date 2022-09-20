import { AxiosResponse } from 'axios';
import { instance } from './instance';
import { IMailbox, IMessage } from './types';

const getResult = <Data>(res: AxiosResponse<Data>) => {
  if (res.status === 200) {
    return res.data;
  } else {
    throw new Error(res.statusText);
  }
};

export const imap = {
  async getMailBoxes(): Promise<IMailbox[]> {
    const res: AxiosResponse<IMailbox[]> = await instance.get('mailboxes');
    return getResult(res);
  },
  async getMessages(mailbox: string): Promise<IMessage[]> {
    const res: AxiosResponse<IMessage[]> = await instance.get(
      `/mailboxes/${mailbox}`
    );
    return getResult(res);
  },
  async getMessage(mailbox: string, id: string): Promise<string> {
    const res: AxiosResponse<string> = await instance.get(
      `/messages/${mailbox}/${id}`
    );
    return getResult(res);
  },
  async deleteMessage(mailbox: string, id: string): Promise<string> {
    const res: AxiosResponse<string> = await instance.delete(
      `/messages/${mailbox}/${id}`
    );
    return getResult(res);
  },
};
