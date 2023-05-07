import { FC } from 'react';
import ParteneriList from './ParteneriList';

const Parteneri: FC = () => {
  return (
    <section className="mb-28">
      <div className="container">
        <h2 className="title">Parteneri</h2>
        <ParteneriList />
      </div>
    </section>
  );
};

export default Parteneri;
