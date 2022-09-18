import React from 'react';
import Button from './Button';

const MailboxList = () => {
  return (
    <aside className='w-40 h-screen border-r-2'>
      <ul className='p-4'>
        <li>
          {[0, 0, 0, 0, 0, 0, 0].map((x) => (
            <Button styles='p-2 mb-4 w-full rounded-3xl text-center'>
              Mailbox
            </Button>
          ))}
        </li>
      </ul>
    </aside>
  );
};

export default MailboxList;
