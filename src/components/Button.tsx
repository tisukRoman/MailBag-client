import React from 'react';
import classnames from 'classnames';

type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  styles?: string;
};

const Button: React.FC<ButtonProps> = (props) => {
  const styles = classnames(
    'bg-blue-900 text-white hover:bg-blue-600 duration-100',
    props.styles
  );

  return (
    <button className={styles} {...props}>
      {props.children}
    </button>
  );
};

Button.defaultProps = {
  children: 'Button',
};

export default Button;
