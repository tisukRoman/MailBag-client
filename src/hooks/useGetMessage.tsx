import { useQuery } from '@tanstack/react-query';
import { imap } from '../utils/imap';

export const useGetMessage = (mailbox: string, id: string) =>
  useQuery(['messages', mailbox, id], () => imap.getMessage(mailbox, id));
