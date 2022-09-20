import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { imap } from '../utils/imap';
import MailboxList from './MailboxList';
import MessageList from './MessageList';
import ContactList from './ContactList';
import Toolbar from './Toolbar';

const BaseLayout: React.FC = () => {
  const { data: mailboxes, status } = useQuery(
    ['mailboxes'],
    imap.getMailBoxes
  );

  return (
    <div className='max-w-screen-xl mx-auto border-2'>
      <Toolbar />
      <main>
        <MailboxList mailboxes={mailboxes} />
        <MessageList />
        <ContactList />
      </main>
    </div>
  );
};

export default BaseLayout;
