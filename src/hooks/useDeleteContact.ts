import { useMutation, useQueryClient } from '@tanstack/react-query';
import { contacts } from '../utils/contacts';

export const useDeleteContact = (id: string) => {
  const client = useQueryClient();
  return useMutation(['contact', id], () => contacts.deleteContacts(id), {
    onSuccess: () => client.invalidateQueries(['contacts']),
  });
};
