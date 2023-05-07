import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
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
