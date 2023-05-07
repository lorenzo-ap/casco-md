import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import { FC } from 'react';
import { Outlet } from 'react-router-dom';

const RootLayout: FC = () => {
  return (
    <>
      <Header />
      <main className="pt-44">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
