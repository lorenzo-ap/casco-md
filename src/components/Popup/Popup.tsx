import { RxCross2 } from 'react-icons/rx';
import { IPopupProps } from 'types/popup.interface';

const Popup = ({ isOpen, onClose, children }: IPopupProps) => {
  const hidePopup = (event?: React.MouseEvent<HTMLDivElement> | React.MouseEvent<HTMLButtonElement>) => {
    if (event?.target === event?.currentTarget || event?.currentTarget.tagName === 'BUTTON') {
      onClose();
    }
  };

  return (
    <div
      onClick={(e) => hidePopup(e)}
      className={`${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      } fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-20 flex justify-center items-center transition-opacity`}>
      <div className="flex flex-col justify-center items-center w-1/3 h-2/3 bg-white relative rounded-xl">
        <button onClick={hidePopup} type="button">
          <RxCross2 size={30} color="#4fbdba" className="absolute top-3 right-3" />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Popup;
