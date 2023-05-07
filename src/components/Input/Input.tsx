import { IInputProps } from 'interfaces/interfaces';
import { FC } from 'react';

const Input: FC<IInputProps> = ({ name, id }) => {
  return (
    <div className="flex flex-col w-full">
      <label className="mb-1" htmlFor={id}>
        {name}
      </label>
      <input id={id} className="border border-gray-500 rounded-md outline-none px-3 py-3" type="text" />
    </div>
  );
};

export default Input;
