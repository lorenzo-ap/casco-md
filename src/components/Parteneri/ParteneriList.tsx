import ParteneriItem from './ParteneriItem';

const fakeData = [
  {
    id: 1,
    name: 'Partener 1',
    image: 'https://1000logos.net/wp-content/uploads/2018/02/Logo-Tesla.jpg',
  },
  {
    id: 2,
    name: 'Partener 2',
    image: 'https://static.displate.com/857x1200/displate/2019-12-09/c43edbaa1f1abf2c7c085b5b0b309e3a_ff33902f6d4571f5ba6235e05d40271d.jpg',
  },
  {
    id: 3,
    name: 'Partener 3',
    image: 'https://1000logos.net/wp-content/uploads/2018/02/Logo-Tesla.jpg',
  },
  {
    id: 4,
    name: 'Partener 4',
    image: 'https://static.displate.com/857x1200/displate/2019-12-09/c43edbaa1f1abf2c7c085b5b0b309e3a_ff33902f6d4571f5ba6235e05d40271d.jpg',
  },
  {
    id: 5,
    name: 'Partener 5',
    image: 'https://1000logos.net/wp-content/uploads/2018/02/Logo-Tesla.jpg',
  },
  {
    id: 6,
    name: 'Partener 6',
    image: 'https://static.displate.com/857x1200/displate/2019-12-09/c43edbaa1f1abf2c7c085b5b0b309e3a_ff33902f6d4571f5ba6235e05d40271d.jpg',
  },
];

const ParteneriList = () => {
  return (
    <div className="grid grid-cols-3 gap-8">
      {fakeData.map((partener) => (
        <ParteneriItem key={partener.id} name={partener.name} image={partener.image} />
      ))}
    </div>
  );
};

export default ParteneriList;
