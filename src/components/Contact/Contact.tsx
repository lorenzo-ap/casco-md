import { FC } from 'react';

const Contact: FC = () => {
  return (
    <section>
      <div className="container">
        <div className="flex py-24 gap-x-10">
          <div>
            <h2 className="text-[40px] mb-6">Contact</h2>
            <p className="mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
            </p>
            <form className="flex flex-col gap-y-8">
              <input className="border border-gray-500 rounded-lg outline-none px-3 py-4" type="text" placeholder="Nume" />
              <input className="border border-gray-500 rounded-lg outline-none px-3 py-4" type="email" placeholder="E-mail" />
              <input className="border border-gray-500 rounded-lg outline-none px-3 py-4" type="text" placeholder="Mesaj" />
              <button className="button">Înainte</button>
            </form>
          </div>
          <div className="w-[90%] bg-[#d9d9d9] rounded-lg">
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
