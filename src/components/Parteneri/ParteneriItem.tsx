import { IParteneriItemProps } from 'interfaces/interfaces';
import { FC } from 'react';

const ParteneriItem: FC<IParteneriItemProps> = ({ name, image }) => {
  return (
    <div className="flex flex-col justify-between items-center h-100 border rounded-md py-10">
      <div className="bg-[#a4a4a4] h-52 w-full mb-10">
        <img className="w-full h-full" src={image} alt="" />
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
