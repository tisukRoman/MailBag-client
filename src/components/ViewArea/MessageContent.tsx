import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetMessage } from '../../hooks/useGetMessage';

const MessageContent = () => {
  const { mailbox, id } = useParams();
  const {
    data: message,
    isLoading,
    isError,
    error,
  } = useGetMessage(mailbox, id);

  let content = <div>Loading...</div>;

  if (isLoading) {
    content = <div>Loading...</div>;
  } else if (isError) {
    content = <div>{(error as Error).message || 'Error'}</div>;
  } else if (!message.trim()) {
    content = <div>Empty...</div>;
  } else {
    content = (
      <div>
        <div dangerouslySetInnerHTML={{ __html: message }} />
      </div>
    );
  }

  return (
    <div className='w-full p-4 overflow-hidden break-words'>{content}</div>
  );
};

export default MessageContent;
