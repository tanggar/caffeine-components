import React, { FC } from 'react';
import Button, { ButtonProps } from '../Button';

const Example: FC<ButtonProps> = ({
  disabled = false,
  onClick = () => {},
  type,
  label = 'Button',
}) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <Button label={label} disabled={disabled} onClick={onClick} type={type} />
    </div>
  );
};

export default Example;
