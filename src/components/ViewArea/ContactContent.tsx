import React, { useEffect, useState } from 'react';
import { IContact } from '../../utils/types';
import { useQueryClient } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { useDeleteContact } from '../../hooks/useDeleteContact';
import { useUpdateContact } from '../../hooks/useUpdateContact';
import TextInput from '../shared/TextInput';
import Button from '../shared/Button';

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
    isLoading: isDeleting,
    isError: isDeleteError,
    error: deleteError,
  } = useDeleteContact(contact._id);

  const {
    mutateAsync: updateContact,
    isLoading: isUpdating,
    isError: isUpdateError,
    error: updateError,
  } = useUpdateContact(contact._id, contact);

  useEffect(() => {
    const contacts: IContact[] = queryClient.getQueryData(['contacts']);
    const cachedContact = contacts.find((x) => String(x._id) === id);
    setContact(cachedContact);
  }, [id]);

  const onContactChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const onSave = async () => {
    await updateContact();
    if (isUpdateError) {
      alert((updateError as Error).message || 'Update Error');
    } else {
      navigate('/');
    }
  };

  const onDelete = async () => {
    await deleteContact();
    if (isDeleteError) {
      alert((deleteError as Error).message || 'Delete Error');
    } else {
      navigate('/');
    }
  };

  const isFetching = isDeleting || isUpdating;

  return (
    <div className='flex w-full border-b-2'>
      <div className='p-4 flex flex-col w-1/2 h-52 justify-around border-r-2'>
        <TextInput
          id='name'
          name='name'
          type='text'
          label='Name'
          disabled={isFetching}
          value={contact.name}
          onChange={onContactChange}
        />
        <TextInput
          id='name'
          name='email'
          type='email'
          label='Email'
          disabled={isFetching}
          value={contact.email}
          onChange={onContactChange}
        />
      </div>
      <div className='p-8 flex flex-col h-52 justify-around items-center'>
        <Button
          onClick={onSave}
          styles='w-full px-4 py-2 text-lg bg-green-500 rounded-md'
        >
          {isFetching ? 'loading...' : 'Save'}
        </Button>
        <Button
          onClick={onDelete}
          styles='w-full px-4 py-2 text-lg bg-red-500 rounded-md'
        >
          {isFetching ? 'loading...' : 'Delete'}
        </Button>
      </div>
    </div>
  );
};

export default ContactContent;
