import React from 'react';
import { useGetMessages } from '../hooks/useGetMessages';

type MessageListProps = {
  mailbox: string;
};

const MessageList: React.FC<MessageListProps> = (props) => {
  const {
    data: messages,
    isLoading,
    isError,
    error,
  } = useGetMessages(props.mailbox);

  let content = <div className='p-2'>Loading...</div>;

  if (isLoading) {
    content = <div className='p-2'>Loading...</div>;
  } else if (isError) {
    content = <div className='p-2'>{(error as Error).message || 'Error'}</div>;
  } else if (!messages.length) {
    content = <div className='p-2'>Empty...</div>;
  } else {
    content = (
      <tbody className='flex-1 w-full'>
        {messages?.map((message) => (
          <tr key={message.id}>
            <td className='px-2 border-2'>{message.date}</td>
            <td className='px-2 border-2'>{message.from}</td>
            <td className='px-2 border-2'>{message.subject}</td>
          </tr>
        ))}
      </tbody>
    );
  }

  return (
    <table className='h-1/2 w-full border-b-2 flex flex-col overflow-y-scroll'>
      <tr className='p-2'>
        <th>Date:</th>
        <th className='pl-32'>From:</th>
        <th className='pl-56'>Subject:</th>
      </tr>
      {content}
    </table>
  );
};

export default MessageList;
