import { useQuery } from '@tanstack/react-query';
import { imap } from '../utils/imap';

export const useGetMessages = (mailbox: string) =>
  useQuery(['messages', mailbox], () => imap.getMessages(mailbox));
