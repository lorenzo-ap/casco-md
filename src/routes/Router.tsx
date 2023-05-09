import CarteVerde from 'pages/CarteVerde';
import Casco from 'pages/Casco';
import NotFound from 'pages/NotFound';
import RCA from 'pages/RCA';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import RootLayout from './RootLayout';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="casco" element={<Casco />} />
          <Route path="rca" element={<RCA />} />
          <Route path="carte-verde" element={<CarteVerde />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
