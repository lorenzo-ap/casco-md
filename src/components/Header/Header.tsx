import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: FC = () => {
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-10 shadow-sm bg-gray-200">
      <div className="container">
        <div className="flex justify-between items-center py-4">
          <Link
            className={`text-2xl ${location.pathname === '/' && 'text-[var(--main-color)]'} hover:text-[var(--main-color)] transition-colors`}
            to="/">
            Casco.md
          </Link>
          <nav>
            <ul className="flex justify-between items-center gap-x-6">
              <li>
                <Link
                  className={`${location.pathname === '/casco' && 'text-[var(--main-color)]'} hover:text-[var(--main-color)] transition-colors`}
                  to="casco">
                  Casco
                </Link>
              </li>
              <li>
                <Link
                  className={`${location.pathname === '/rca' && 'text-[var(--main-color)]'} hover:text-[var(--main-color)] transition-colors`}
                  to="rca">
                  RCA
                </Link>
              </li>
              <li>
                <Link
                  className={`${location.pathname === '/carte-verde' && 'text-[var(--main-color)]'} hover:text-[var(--main-color)] transition-colors`}
                  to="carte-verde">
                  Carte verde
                </Link>
              </li>
            </ul>
          </nav>
          <button className="button" type="button">
            Autentificare
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
