import React from 'react';
import { HiOutlineUserCircle } from 'react-icons/hi';
import { IContact } from '../utils/types';

type ContactListProps = {
  contacts: IContact[];
};

const ContactList: React.FC<ContactListProps> = (props) => {
  return (
    <aside className='w-60 h-full border-2'>
      <ul className='px-6 py-2'>
        <li>
          {props.contacts?.map((contact) => (
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
    </aside>
  );
};

export default ContactList;
