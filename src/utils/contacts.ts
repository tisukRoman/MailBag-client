import { AxiosResponse } from 'axios';
import { instance } from './instance';
import { IContact } from './types';
import { getResponse } from './helpers';

export const contacts = {
  async getContacts(): Promise<IContact[]> {
    const res: AxiosResponse<IContact[]> = await instance.get('contacts');
    return getResponse(res);
  },

  async addContact(contact: Omit<IContact, '_id'>): Promise<IContact[]> {
    const res: AxiosResponse<IContact[]> = await instance.post(
      'contacts',
      contact
    );
    return getResponse(res);
  },

  async deleteContacts(id: string): Promise<string> {
    const res: AxiosResponse<string> = await instance.delete(`contacts/${id}`);
    return getResponse(res);
  },
};
