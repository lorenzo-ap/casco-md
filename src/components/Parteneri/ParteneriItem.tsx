import { FC } from 'react';

interface IParteneriItemProps {
  name: string;
  image: string;
}

const ParteneriItem: FC<IParteneriItemProps> = ({ name, image }) => {
  return (
    <div className="flex flex-col justify-between items-center h-100 border rounded-md py-10">
      <div className="bg-[#a4a4a4] h-52 w-full mb-10">
        <img src="" alt="" />
      </div>
      <div>
        <div className="text-center mb-4">{name}</div>
        <button className="button button-sm" type="button">
          Condiții asigurare
        </button>
      </div>
    </div>
  );
};

export default ParteneriItem;
