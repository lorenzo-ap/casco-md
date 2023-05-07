import { IInputProps } from 'interfaces/interfaces';
import { FC } from 'react';

const Input: FC<IInputProps> = ({ name, id }) => {
  return (
    <div className="checkbox-wrapper flex gap-x-1">
      <input id={id} type="checkbox" />
      <label className="mb-1" htmlFor={id}>
        {name}
      </label>
    </div>
  );
};

export default Input;
