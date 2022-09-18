import React from 'react';
import Toolbar from './Toolbar';
import MailboxList from './MailboxList';
import MessageList from './MessageList';
import ContactList from './ContactList';

const BaseLayout: React.FC = () => {
  return (
    <div className='max-w-screen-xl mx-auto border-2'>
      <Toolbar />
      <main>
        <MailboxList />
        <MessageList />
        <ContactList />
      </main>
    </div>
  );
};

export default BaseLayout;
