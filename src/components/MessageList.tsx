import React from 'react';
import { Link } from 'react-router-dom';
import { useGetMessages } from '../hooks/useGetMessages';
import Button from './Button';

type MessageListProps = {
  mailbox: string;
};

const MessageList: React.FC<MessageListProps> = ({ mailbox }) => {
  const { data: messages, isLoading, isError, error } = useGetMessages(mailbox);

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
            <td className='px-4 py-2 border-2'>
              <Link to={`/${mailbox}/${message.id}`}>
                <Button styles='px-2 rounded-sm font-bold'>Read</Button>
              </Link>
            </td>
          </tr>
        ))}
      </>
    );
  }

  return (
    <table className='h-1/2 w-full border-b-2 flex flex-col overflow-y-scroll'>
      <thead>
        <tr className='p-2'>
          <th>Date:</th>
          <th className='pl-32'>From:</th>
          <th className='pl-60'>Subject:</th>
          <th className='pl-60'>Action:</th>
        </tr>
      </thead>
      <tbody className='flex-1w-full'>{content}</tbody>
    </table>
  );
};

export default MessageList;
