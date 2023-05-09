import { RxCross2 } from 'react-icons/rx';

interface IPopupProps {
  isOpened: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Popup = ({ isOpened, onClose, children }: IPopupProps) => {
  return (
    <div
      className={`${
        isOpened ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }  fixed top-0 left-0 right-0 bottom-0 z-20 flex justify-center items-center transition-opacity`}>
      <div onClick={onClose} className="absolute top-0 left-0 right-0 bottom-0  bg-black bg-opacity-50" />
      <div className="flex flex-col justify-center items-center w-1/3 h-2/3 bg-white relative rounded-xl shadow-md">
        <button onClick={onClose} type="button">
          <RxCross2 size={30} className="absolute top-3 right-3 hover:text-main-color transition-colors" />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Popup;
