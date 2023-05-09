import Input from 'components/Input/Input';
import Popup from 'components/Popup/Popup';
import PopupForm from 'components/Popup/PopupForm';
import { FC, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navigation from './Navigation';

const Header: FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-10 shadow-sm bg-gray-200">
        <div className="container">
          <div className="flex justify-between items-center py-4">
            <Link className={`text-2xl ${location.pathname === '/' && 'text-main-color'} hover:text-main-color transition-colors`} to="/">
              Casco.md
            </Link>
            <Navigation location={location} />
            <button onClick={() => setIsPopupOpen((prev) => !prev)} className="button" type="button">
              Autentificare
            </button>
          </div>
        </div>
      </header>
      <AuthPopup isOpen={isPopupOpen} setIsOpen={setIsPopupOpen} />
    </>
  );
};

interface IAuthProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const AuthPopup = ({ isOpen, setIsOpen }: IAuthProps) => {
  const [isLoginForm, setIsLoginForm] = useState(true);

  const closePopup = () => {
    setIsOpen(false);
    setTimeout(() => {
      setIsLoginForm(true);
    }, 300);
  };

  return (
    <Popup isOpen={isOpen} onClose={closePopup}>
      {isLoginForm ? (
        <PopupForm title="Autentificare" setIsLoginForm={setIsLoginForm}>
          <Input name="Username" id="username" />
          <Input name="Parola" id="parola" />
          <button className="button mt-2">Intra</button>
        </PopupForm>
      ) : (
        <PopupForm title="Inregistrare" setIsLoginForm={setIsLoginForm}>
          <Input name="Username" id="username" />
          <Input name="Email" id="email" />
          <Input name="Parola" id="parola" />
          <button className="button mt-2">Register</button>
        </PopupForm>
      )}
    </Popup>
  );
};

export default Header;
