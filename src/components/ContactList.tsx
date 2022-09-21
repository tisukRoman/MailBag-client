import React from 'react';
import { HiOutlineUserCircle } from 'react-icons/hi';
import { useGetContacts } from '../hooks/useGetContacts';

const ContactList: React.FC = () => {
  const { data: contacts, isLoading, isError, error } = useGetContacts();

  let content = <div>Loading...</div>;

  if (isLoading) {
    content = <div>Loading...</div>;
  } else if (isError) {
    content = <div>{(error as Error).message || 'Error'}</div>;
  } else {
    content = (
      <ul>
        <li>
          {contacts?.map((contact) => (
            <div
              key={contact._id}
              className='w-full mb-2 p-4 flex justify-start items-center scale-125 cursor-pointer hover:bg-slate-200 duration-100'
            >
              <HiOutlineUserCircle className='scale-150 mr-4 shrink-0' />
              {contact.name ? contact.name : 'Unknown'}
            </div>
          ))}
        </li>
      </ul>
    );
  }

  return <aside className='w-60 h-full border-2 px-6 py-2'>{content}</aside>;
};

export default ContactList;
