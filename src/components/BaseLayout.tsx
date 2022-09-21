import React from 'react';
import MailboxList from './MailboxList';
import MessageList from './MessageList';
import ContactList from './ContactList';
import Toolbar from './Toolbar';

const BaseLayout: React.FC = () => {
  const [mailbox, setMailbox] = React.useState<string>('Inbox');

  const onMailboxChange = (name: string) => {
    setMailbox(name);
  };

  return (
    <div className='max-w-screen-xl mx-auto border-2'>
      <Toolbar />
      <main className='flex h-screen'>
        <MailboxList onMailboxChange={onMailboxChange} />
        <div className='flex-1 h-screen flex flex-col'>
          <MessageList mailbox={mailbox} />
          <div className='h-1/2'></div>
        </div>
        <ContactList />
      </main>
    </div>
  );
};

export default BaseLayout;
