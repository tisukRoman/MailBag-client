import React, { useEffect, useState } from 'react';
import { IContact } from '../utils/types';
import { useQueryClient } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { useDeleteContact } from '../hooks/useDeleteContact';
import TextInput from './TextInput';
import Button from './Button';

const ContactContent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [contact, setContact] = useState<IContact>({
    _id: 'unknown',
    name: 'unknown',
    email: 'unknown',
  });

  const {
    mutateAsync: deleteContact,
    isLoading,
    isError,
    error,
  } = useDeleteContact(contact._id);

  useEffect(() => {
    const contacts: IContact[] = queryClient.getQueryData(['contacts']);
    const cachedContact = contacts.find((x) => String(x._id) === id);
    setContact(cachedContact);
  }, [id]);

  const onContactChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const onSave = () => {
    console.log('Save');
  };

  const onDelete = async () => {
    await deleteContact();
    navigate('/');
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
          onClick={onSave}
          styles='w-full px-4 py-2 text-lg bg-green-500 rounded-md'
        >
          {isLoading ? 'loading...' : 'Save'}
        </Button>
        <Button
          onClick={onDelete}
          styles='w-full px-4 py-2 text-lg bg-red-500 rounded-md'
        >
          {isLoading ? 'loading...' : 'Delete'}
        </Button>
      </div>
    </div>
  );
};

export default ContactContent;
