import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { imap } from '../utils/imap';
import { contacts } from '../utils/contacts';
import MailboxList from './MailboxList';
import MessageList from './MessageList';
import ContactList from './ContactList';
import Toolbar from './Toolbar';

const BaseLayout: React.FC = () => {
  const { data: mailboxList } = useQuery(['mailboxes'], imap.getMailBoxes);
  const { data: contactList } = useQuery(['contacts'], contacts.getContacts);

  return (
    <div className='max-w-screen-xl mx-auto border-2'>
      <Toolbar />
      <main className='flex h-screen'>
        <MailboxList mailboxes={mailboxList} />
        <div className='flex-1'>
          <MessageList />
        </div>
        <ContactList contacts={contactList} />
      </main>
    </div>
  );
};

export default BaseLayout;
