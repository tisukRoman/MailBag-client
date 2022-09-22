import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MessageContent from './MessageContent';
import ContactContent from './ContactContent';
import CreateContact from './CreateContact';
import CreateMessage from './CreateMessage';

const Welcome = () => {
  return <div className='flex justify-center text-3xl mt-20'>Welcome!</div>;
};

export const ViewArea = () => {
  return (
    <div className='w-full h-128 overflow-y-scroll'>
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/:mailbox/:id' element={<MessageContent />} />
        <Route path='/contacts/:id' element={<ContactContent />} />
        <Route path='/contacts/create' element={<CreateContact />} />
        <Route path='/messages/create' element={<CreateMessage />} />
      </Routes>
    </div>
  );
};
