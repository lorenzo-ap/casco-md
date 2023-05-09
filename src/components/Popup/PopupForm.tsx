interface IPoupFormProps {
  title: string;
  setIsLoginForm: (valueFunc: (value: boolean) => boolean) => void;
  children: React.ReactNode;
}

const PopupForm = ({ title, setIsLoginForm, children }: IPoupFormProps) => {
  const changeAuth = () => {
    setIsLoginForm((prev) => !prev);
  };

  return (
    <div className="flex flex-col w-full">
      <div className="title">{title}</div>
      <form className="flex flex-col gap-y-5 w-full max-w-sm my-0 mx-auto">{children}</form>
      <button onClick={changeAuth} className="mt-8">
        Inregistreazate
      </button>
    </div>
  );
};

export default PopupForm;
