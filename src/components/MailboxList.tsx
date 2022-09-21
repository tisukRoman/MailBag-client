import React from 'react';
import Button from './Button';
import { useGetMailboxes } from '../hooks/useGetMailboxes';

const MailboxList: React.FC = () => {
  const { data: mailboxes, isLoading, isError, error } = useGetMailboxes();

  let content = <div>Loading...</div>;

  if (isLoading) {
    content = <div>Loading...</div>;
  } else if (isError) {
    content = <div>{(error as Error).message || 'Error'}</div>;
  } else {
    content = (
      <ul>
        <li>
          {mailboxes?.map((mailbox) => (
            <Button
              key={mailbox.name}
              styles='p-2 mb-4 w-full rounded-3xl text-center'
            >
              {mailbox.name}
            </Button>
          ))}
        </li>
      </ul>
    );
  }

  return <aside className='w-40 p-4 h-full border-r-2'>{content}</aside>;
};

export default MailboxList;
