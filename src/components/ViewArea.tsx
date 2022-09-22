import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MessageContent from './MessageContent';

const Welcome = () => {
  return <div className='flex justify-center text-3xl mt-20'>Welcome!</div>;
};

const ViewArea = () => {
  return (
    <div className='w-full h-128 overflow-y-scroll'>
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/:mailbox/:id' element={<MessageContent />} />
        <Route path='/contacts/:id' element={<Welcome />} />
      </Routes>
    </div>
  );
};

export default ViewArea;
