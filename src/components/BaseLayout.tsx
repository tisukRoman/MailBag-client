import React from 'react';
import MailboxList from './MailboxList';
import MessageList from './MessageList';
import ContactList from './ContactList';
import ViewArea from './ViewArea';
import Toolbar from './Toolbar';

const BaseLayout: React.FC = () => {
  const [mailbox, setMailbox] = React.useState<string>('Inbox');

  const onMailboxChange = (name: string) => {
    setMailbox(name);
  };

  return (
    <div className='w-[1224px] min-h-screen mx-auto border-2'>
      <Toolbar />
      <main className='flex h-screen w-full'>
        <MailboxList onMailboxChange={onMailboxChange} />
        <div className='w-[72%] min-h-screen flex flex-col'>
          <MessageList mailbox={mailbox} />
          <ViewArea />
        </div>
        <ContactList />
      </main>
    </div>
  );
};

export default BaseLayout;
