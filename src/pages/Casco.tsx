import Input from 'components/Input/Input';
import InputCheckBox from 'components/Input/InputCheckBox';
import InputSelect from 'components/Input/InputSelect';
import { FC } from 'react';
import { FiShoppingCart } from 'react-icons/fi';

const Casco: FC = () => {
  return (
    <div className="container">
      <div className="pb-20">
        <h1 className="title">Aici comandă Casco</h1>
        <form className="flex flex-col justify-center items-start gap-y-7 max-w-xl my-0 mx-auto">
          <InputSelect name="Tipul vehiculului" id="tipulVehiculului" options={['Autoturism', 'test']} optionsValues={['autoturism', '1']} />
          <InputSelect name="Marca" id="marca" options={['BMW']} optionsValues={['bmw']} />
          <InputSelect name="Model" id="model" options={['Seria 5']} optionsValues={['seria5']} />
          <InputSelect name="Anul fabricației" id="anulFabricatiei" options={['2018']} optionsValues={['2018']} />
          <div className="w-full">
            <label className="mb-1" htmlFor="valoareaPePiata">
              Valoarea pe piață
            </label>
            <div className="flex gap-x-4">
              <input className="flex-grow border border-gray-500 rounded-md outline-none px-3 py-3" id="valoareaPePiata" type="text" />
              <select className="input border border-gray-500 rounded-md outline-none px-3 py-3 w-28" name="valuta" id="valuta">
                <option value="eur">EUR</option>
              </select>
            </div>
          </div>
          <Input name="IDNO/IDNP(necesar)" id="idnoIdnp" />
          <Input name="Nume/Prenume" id="numePrenume" />
          <Input name="IDNO/IDNP(șofer adițional)" id="idnoIdnpSofer" />
          <Input name="Nume/Prenume(șofer adițional)" id="numePrenumeSofer" />
          <Input name="Numărul certificatului de înmatriculare" id="nrCertificatDeInmatriculare" />
          <Input name="Numărul de înregistrare" id="nrDeInregistrare" />
          <InputSelect name="Drept de posesiune" id="dreptDePosesiune" options={['Leasing']} optionsValues={['leasing']} />
          <Input name="Numărul de telefon(necesar)" id="nrTelefon" />
          <Input name="Adresa e-mail(necesar)" id="adresaEmail" />

          <div className="flex gap-x-3 font-bold">
            <FiShoppingCart size={24} />
            <span>Livrare gratuită</span>
          </div>

          <div className="flex flex-col gap-y-3">
            <InputCheckBox name="Accept „Termenii şi Condiţiile“" id="termeniSiConditii" />
            <InputCheckBox name="Accept „Prelucrarea datelor cu caracter personal.“" id="prelucrareaDatelor" />
          </div>

          <button className="button">Comandă</button>
        </form>
      </div>
    </div>
  );
};

export default Casco;
