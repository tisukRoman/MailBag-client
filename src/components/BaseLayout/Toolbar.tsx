import React from 'react';
import Button from '../shared/Button';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { FaRegEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Toolbar = () => {
  return (
    <header className='mt-2 w-full h-20 border-b-2'>
      <nav className='flex p-4'>
        <Link to='messages/create'>
          <Button styles='p-2 rounded-sm w-36'>
            <div className='w-full flex justify-between items-center'>
              <FaRegEnvelope /> NEW MESSAGE
            </div>
          </Button>
        </Link>
        <Link to='/contacts/create'>
          <Button styles='p-2 rounded-sm w-36 ml-4'>
            <div className='w-full flex justify-between items-center'>
              <AiOutlineUserAdd /> ADD CONTACT
            </div>
          </Button>
        </Link>
      </nav>
    </header>
  );
};

export default Toolbar;
