import React from 'react';
import { IMailbox } from '../utils/types';
import Button from './Button';

type MailboxListProps = {
  mailboxes: IMailbox[];
};

const MailboxList: React.FC<MailboxListProps> = (props) => {
  return (
    <aside className='w-40 h-full border-r-2'>
      <ul className='p-4'>
        <li>
          {props.mailboxes?.map((mailbox) => (
            <Button
              key={mailbox.name}
              styles='p-2 mb-4 w-full rounded-3xl text-center'
            >
              {mailbox.name}
            </Button>
          ))}
        </li>
      </ul>
    </aside>
  );
};

export default MailboxList;
