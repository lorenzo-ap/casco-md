import { IInputProps } from 'types/input.interface';

const Input = ({ name, id }: IInputProps) => {
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
