import React, { TextareaHTMLAttributes } from 'react';

type TextAreaProps = React.DetailedHTMLProps<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
> & {
  label: string;
  id: string;
};

const TextArea: React.FC<TextAreaProps> = (props) => {
  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <textarea
        {...props}
        className='block border-2 resize-none w-128 h-60 mt-1 px-2 py-1'
      >
        {props.children ? props.children : ''}
      </textarea>
    </div>
  );
};

export default TextArea;
