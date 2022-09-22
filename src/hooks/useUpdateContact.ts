import { useMutation, useQueryClient } from '@tanstack/react-query';
import { IContact } from '../utils/types';
import { contacts } from '../utils/contacts';

export const useUpdateContact = (id: string, contact: IContact) => {
  const client = useQueryClient();
  return useMutation(
    ['contacts', id, contact],
    () => contacts.updateContact(id, contact),
    {
      onSuccess: () => client.invalidateQueries(['contacts']),
    }
  );
};
