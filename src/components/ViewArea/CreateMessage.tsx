import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCreateMessage } from '../../hooks/useCreateMessage';
import { ISentMessage } from '../../utils/types';
import TextInput from '../shared/TextInput';
import TextArea from '../shared/TextArea';
import Button from '../shared/Button';

const CreateMessage = () => {
  const navigate = useNavigate();
  const search = useLocation();
  console.log(search);
  
  const [message, setMessage] = useState<ISentMessage>({
    from: 'romka-003@ukr.net',
    to: '',
    subject: '',
    text: '',
  });

  const {
    mutateAsync: createMessage,
    isLoading,
    isError,
    error,
  } = useCreateMessage(message);

  const onMessageCreate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await createMessage();
    if (isError) {
      alert((error as Error).message || 'Create Error');
    } else {
      navigate('/');
    }
  };

  const onMessageChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setMessage({
      ...message,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className='p-6'>
      <form onSubmit={onMessageCreate}>
        <TextInput
          name='to'
          label='To'
          id='to'
          disabled={isLoading}
          value={message.to}
          onChange={onMessageChange}
        />
        <TextInput
          name='subject'
          label='Subject'
          id='subject'
          disabled={isLoading}
          value={message.subject}
          onChange={onMessageChange}
        />
        <TextArea
          id='text'
          label='Message Text'
          name='text'
          disabled={isLoading}
          value={message.text}
          onChange={onMessageChange}
        ></TextArea>
        <Button type='submit' styles='px-4 py-2 mt-4 w-32 rounded-sm'>
          {isLoading ? 'Loading' : 'Send'}
        </Button>
      </form>
    </div>
  );
};

export default CreateMessage;
