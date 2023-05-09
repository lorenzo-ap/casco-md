import { Link } from 'react-router-dom';

interface INavigationProps {
  location: {
    pathname: string;
  };
}

const Navigation = ({ location }: INavigationProps) => {
  return (
    <nav>
      <ul className="flex justify-between items-center gap-x-6">
        <li>
          <Link className={`${location.pathname === '/casco' && 'text-main-color'} hover:text-main-color transition-colors`} to="casco">
            Casco
          </Link>
        </li>
        <li>
          <Link className={`${location.pathname === '/rca' && 'text-main-color'} hover:text-main-color transition-colors`} to="rca">
            RCA
          </Link>
        </li>
        <li>
          <Link className={`${location.pathname === '/carte-verde' && 'text-main-color'} hover:text-main-color transition-colors`} to="carte-verde">
            Carte verde
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
