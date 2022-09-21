import React from 'react';
import { useQuery } from '@tanstack/react-query';
import MailboxList from './MailboxList';
import MessageList from './MessageList';
import ContactList from './ContactList';
import Toolbar from './Toolbar';

const BaseLayout: React.FC = () => {
  return (
    <div className='max-w-screen-xl mx-auto border-2'>
      <Toolbar />
      <main className='flex h-screen'>
        <MailboxList />
        <div className='flex-1'>
          <MessageList />
        </div>
        <ContactList />
      </main>
    </div>
  );
};

export default BaseLayout;
