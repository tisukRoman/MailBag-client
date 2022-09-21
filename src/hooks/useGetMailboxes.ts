import { useQuery } from '@tanstack/react-query';
import { imap } from '../utils/imap';

export const useGetMailboxes = () => useQuery(['mailboxes'], imap.getMailBoxes);
