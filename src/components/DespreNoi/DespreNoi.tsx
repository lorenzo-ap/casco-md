const DespreNoi = () => {
  return (
    <section className="mb-28 ">
      <div className="container">
        <h2 className="title">Despre noi</h2>
        <div className="flex gap-x-16">
          <div className="flex flex-col gap-y-12">
            <div className="flex justify-between items-start">
              <h3 className="text-4xl leading-snug">Asigurați-vă sigur!</h3>
              <div className="flex gap-x-8">
                <div className="bg-[#d9d9d9] rounded-full w-20 h-20">
                  <img src="" alt="" />
                </div>
                <div className="bg-[#d9d9d9] rounded-full w-20 h-20">
                  <img src="" alt="" />
                </div>
                <div className="bg-[#d9d9d9] rounded-full w-20 h-20">
                  <img src="" alt="" />
                </div>
              </div>
            </div>
            <div className="flex gap-x-8">
              <div className="bg-black h-0.5 w-96 mt-3"></div>
              <div>
                <p className="max-w-4xl mb-10">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class
                  aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum
                  lobortis.
                </p>
                <button className="button" type="button">
                  Mai multe
                </button>
              </div>
            </div>
          </div>
          <div className="rounded-md bg-[#d9d9d9] w-full h-96">
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DespreNoi;
