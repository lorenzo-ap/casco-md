interface IPoupFormProps {
  title: string;
  link: string;
  setIsLoginForm: (valueFunc: (value: boolean) => boolean) => void;
  children: React.ReactNode;
}

const PopupForm = ({ title, link, setIsLoginForm, children }: IPoupFormProps) => {
  const changeAuth = () => {
    setIsLoginForm((prev) => !prev);
  };

  return (
    <div className="flex flex-col items-center w-full">
      <div className="title">{title}</div>
      <form className="flex flex-col gap-y-5 w-full max-w-sm my-0 mx-auto">{children}</form>
      <button onClick={changeAuth} className="mt-8 hover:text-main-color transition-colors">
        {link}
      </button>
    </div>
  );
};

export default PopupForm;
