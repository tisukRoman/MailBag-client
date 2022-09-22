import { IContact } from '../utils/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { contacts } from '../utils/contacts';

export const useCreateContact = (contact: Omit<IContact, '_id'>) => {
  const client = useQueryClient();
  return useMutation(
    ['contacts', contact],
    () => contacts.addContact(contact),
    {
      onSuccess: () => client.invalidateQueries(['contacts']),
    }
  );
};
