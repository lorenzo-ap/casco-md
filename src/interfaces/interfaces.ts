export interface IParteneriItemProps {
  name: string;
  image: string;
}

export interface IInputProps {
  name: string;
  id: string;
}

export interface IInputSelectProps extends IInputProps {
  options: string[];
  optionsValues: string[];
}
