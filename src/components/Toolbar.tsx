import React from 'react';
import Button from './Button';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { FaRegEnvelope } from 'react-icons/fa';

const Toolbar = () => {
  return (
    <header className='mt-2 w-screen h-20 border-black border-b-2'>
      <nav className='flex p-4'>
        <Button
          p='p-2'
          w='w-40'
          text='text-lg'
          rounded='rounded-sm'
          icon={<FaRegEnvelope />}
        >
          NEW MESSAGE
        </Button>
        <Button
          p='p-2'
          m='ml-4'
          w='w-40'
          text='text-lg'
          rounded='rounded-sm'
          icon={<AiOutlineUserAdd />}
        >
          ADD CONTACT
        </Button>
      </nav>
    </header>
  );
};

export default Toolbar;
