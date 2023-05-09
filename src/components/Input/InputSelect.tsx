import { IInputSelectProps } from 'types/input.interface';

const InputSelect = ({ name, id, options, optionsValues }: IInputSelectProps) => {
  return (
    <div className="flex flex-col w-full">
      <label className="mb-1" htmlFor={id}>
        {name}
      </label>
      <select className="input border border-gray-500 rounded-md outline-none px-3 py-3" name={id} id={id}>
        {options.map((option, index) => (
          <option key={option} value={optionsValues[index]}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default InputSelect;
