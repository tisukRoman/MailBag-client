import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ISentMessage } from '../utils/types';
import { smtp } from '../utils/smtp';

export const useCreateMessage = (message: ISentMessage) => {
  const client = useQueryClient();
  return useMutation(['messages', message], () => smtp.sendMessage(message), {
    onSuccess: () => client.invalidateQueries(['messages']),
  });
};
