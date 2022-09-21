import { useQuery } from '@tanstack/react-query';
import { contacts } from '../utils/contacts';

export const useGetContacts = () =>
  useQuery(['contacts'], contacts.getContacts);
