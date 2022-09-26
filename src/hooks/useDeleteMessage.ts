import { useMutation, useQueryClient } from '@tanstack/react-query';
import { imap } from '../utils/imap';

export const useDeleteMessage = (mailbox: string) => {
  const client = useQueryClient();
  return useMutation(
    ['deleteMessage', mailbox],
    (id: string) => imap.deleteMessage(mailbox, id),
    {
      onSuccess: () => client.invalidateQueries(['messages', mailbox]),
    }
  );
};
