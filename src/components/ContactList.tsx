import React from 'react';
import { HiOutlineUserCircle } from 'react-icons/hi';
import { Link } from 'react-router-dom';
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
          {contacts?.map(({ _id, name }) => (
            <Link
              to={`/contacts/${_id}`}
              key={_id}
              className='w-full mb-2 p-2 flex justify-start items-center border-b-2 scale-110 cursor-pointer hover:bg-slate-200 duration-100'
            >
              <HiOutlineUserCircle className='scale-150 mr-4 shrink-0' />
              {name ? name : 'Unknown'}
            </Link>
          ))}
        </li>
      </ul>
    );
  }

  return (
    <aside className='w-[16%] min-h-full border-l-2 px-6 py-2 shrink-0'>
      {content}
    </aside>
  );
};

export default ContactList;
