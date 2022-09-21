import { useQuery } from '@tanstack/react-query';
import { imap } from '../utils/imap';

export const useGetMessages = (mailbox: string) =>
  useQuery(['mailboxes', mailbox], () => imap.getMessages(mailbox));
