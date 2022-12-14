import React from 'react';
import { Link } from 'react-router-dom';
import { useGetMessages } from '../../hooks/useGetMessages';
import { useDeleteMessage } from '../../hooks/useDeleteMessage';
import Button from '../shared/Button';

type MessageListProps = {
  mailbox: string;
};

const MessageList: React.FC<MessageListProps> = ({ mailbox }) => {
  const { data: messages, isLoading, isError, error } = useGetMessages(mailbox);
  const {
    mutateAsync: deleteMessage,
    isLoading: isDeleting,
    isError: isDeleteError,
    error: deleteError,
  } = useDeleteMessage(mailbox);

  const onDelete = async (id: string) => {
    await deleteMessage(id);
    if (isDeleteError) {
      alert((deleteError as Error).message || 'Delete Error');
    }
  };

  let content = (
    <tr className='p-2'>
      <td>Loading...</td>
    </tr>
  );

  if (isLoading) {
    content = (
      <tr className='p-2'>
        <td>Loading...</td>
      </tr>
    );
  } else if (isError) {
    content = (
      <tr className='p-2'>
        <td>{(error as Error).message || 'Error'}</td>
      </tr>
    );
  } else if (!messages.length) {
    content = (
      <tr className='p-2'>
        <td>Loading...</td>
      </tr>
    );
  } else {
    content = (
      <>
        {messages?.map((message) => (
          <tr key={message.id}>
            <td className='p-2 border-2'>{message.date}</td>
            <td className='p-2 border-2'>{message.from}</td>
            <td className='p-2 border-2'>{message.subject}</td>
            <td className='p-2 border-2'>
              <div className='flex justify-around items-center'>
                <Link to={`/${mailbox}/${message.id}`}>
                  <Button styles='px-2 rounded-sm font-bold'>Read</Button>
                </Link>
                <Button
                  onClick={() => onDelete(message.id)}
                  styles='px-2 rounded-sm font-bold'
                >
                  {isDeleting ? 'Deleting...' : 'Delete'}
                </Button>
              </div>
            </td>
          </tr>
        ))}
      </>
    );
  }

  return (
    <>
      <div className='w-full h-8 flex border-b-2'>
        <div>Date:</div>
        <div className='pl-32'>From:</div>
        <div className='pl-60'>Subject:</div>
        <div className='pl-60'>Actions:</div>
      </div>
      <table className='h-128 w-full border-b-2 flex flex-col overflow-y-scroll'>
        <tbody className='flex-1 w-full'>{content}</tbody>
      </table>
    </>
  );
};

export default MessageList;
