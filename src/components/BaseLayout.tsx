import React, { useEffect } from 'react';
import Toolbar from './Toolbar';
import MailboxList from './MailboxList';
import MessageList from './MessageList';
import ContactList from './ContactList';
import { imap } from '../utils/imap';
import { useQuery } from '@tanstack/react-query';

const BaseLayout: React.FC = () => {
  const mailboxQuery = useQuery(['mailboxes'], imap.getMailBoxes);

  if(!mailboxQuery.data){
    return <div>Load...</div>
  }
  return (
    <div className='max-w-screen-xl mx-auto border-2'>
      <Toolbar />
      <main>
        <MailboxList mailboxes={mailboxQuery.data} />
        <MessageList />
        <ContactList />
      </main>
    </div>
  );
};

export default BaseLayout;
