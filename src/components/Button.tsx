import React from 'react';
import classnames from 'classnames';

type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  p?: string;
  m?: string;
  w?: string;
  h?: string;
  rounded?: string;
  font?: string;
  text?: string;
  scale?: string;
  icon?: React.ReactNode;
};

const Button: React.FC<ButtonProps> = (props) => {
  const styles = classnames(
    'bg-blue-900 text-white flex items-center justify-between hover:bg-blue-600 duration-100',
    props.w,
    props.h,
    props.p,
    props.m,
    props.rounded,
    props.font,
    props.text,
    props.scale
  );

  return (
    <button className={styles} {...props}>
      {props.icon}
      {props.children}
    </button>
  );
};

Button.defaultProps = {
  children: 'Button',
  w: '16',
  h: '8',
  p: '2',
  m: '0',
  scale: '1',
  rounded: 'sm',
  text: 'sm',
  font: 'light',
};

export default Button;
