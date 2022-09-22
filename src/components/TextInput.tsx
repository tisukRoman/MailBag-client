import React from 'react';

type TextInputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  id: string;
  label: string;
  styles?: string;
};

const TextInput: React.FC<TextInputProps> = (props) => {
  return (
    <div className={props.styles}>
      <label htmlFor={props.id}>{props.label}</label>
      <input {...props} className='block mt-1 border-2 px-2 py-1' />
    </div>
  );
};

export default TextInput;
