import React, { useState } from 'react';
import { IContact } from '../utils/types';
import { useCreateContact } from '../hooks/useCreateContact';
import TextInput from './TextInput';
import { useNavigate } from 'react-router-dom';
import Button from './Button';

const CreateContact: React.FC = () => {
  const navigate = useNavigate();
  const [contact, setContact] = useState<Omit<IContact, '_id'>>({
    name: '',
    email: '',
  });

  const {
    mutateAsync: createContact,
    isLoading,
    isError,
    error,
  } = useCreateContact(contact);

  const onContactChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const onContactCreate = async () => {
    await createContact();
    if (isError) {
      alert(error);
    } else {
      navigate('/');
    }
  };

  return (
    <div className='flex w-full border-b-2'>
      <div className='p-4 flex flex-col w-1/2 h-52 justify-around border-r-2'>
        <TextInput
          id='name'
          name='name'
          type='text'
          label='Name'
          disabled={isLoading}
          value={contact.name}
          onChange={onContactChange}
        />
        <TextInput
          id='name'
          name='email'
          type='email'
          label='Email'
          disabled={isLoading}
          value={contact.email}
          onChange={onContactChange}
        />
      </div>
      <div className='p-8 flex flex-col h-52 justify-around items-center'>
        <Button
          onClick={onContactCreate}
          styles='w-full px-4 py-2 text-lg bg-green-500 rounded-md'
        >
          {isLoading ? 'loading...' : 'Create'}
        </Button>
      </div>
    </div>
  );
};

export default CreateContact;
