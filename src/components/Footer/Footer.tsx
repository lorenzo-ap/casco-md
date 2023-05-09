import { BsInstagram, BsWhatsapp } from 'react-icons/bs';
import { FaFacebookSquare } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#072227] text-white">
      <div className="container">
        <div className="flex justify-between items-center h-60">
          <div className="flex flex-col items-center gap-y-5">
            <div className="flex justify-between gap-x-8">
              <a href="!#">
                <BsInstagram size={40} className="hover:text-[] transition-colors" />
              </a>
              <a href="!#">
                <FaFacebookSquare size={40} className="hover:text-[] transition-colors" />
              </a>
              <a href="!#">
                <BsWhatsapp size={40} className="hover:text-[] transition-colors" />
              </a>
            </div>
            <a className="text-2xl footer-link transition-colors" href="tel:+37360944111">
              +(373) 609 44 111
            </a>
          </div>
          <div className="flex flex-col gap-y-12 text-center">
            <Link className="footer-link text-xl transition-colors" to="/">
              Casco.md
            </Link>
            <div className="flex justify-center gap-x-6">
              <Link className="footer-link transition-colors" to="casco">
                Casco
              </Link>
              <Link className="footer-link transition-colors" to="rca">
                RCA
              </Link>
              <Link className="footer-link transition-colors" to="carte-verde">
                Carte verde
              </Link>
            </div>
            <div className="opacity-75">Copyright © 2022 O.design. All Rights reserved</div>
          </div>
          <div className="flex flex-col gap-y-3">
            <Link className="footer-link transition-colors" to="">
              Termeni și condiții
            </Link>
            <Link className="footer-link transition-colors" to="">
              Raportați un caz de asigurare
            </Link>
            <Link className="footer-link transition-colors" to="">
              Găsiți un agent
            </Link>
            <Link className="footer-link transition-colors" to="">
              Întrebări și răspunsuri
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
