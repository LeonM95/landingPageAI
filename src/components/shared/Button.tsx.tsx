interface ButtonProps {
  //parameters
  clasName?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

//return a link to redirect
export const Button = ({ onClick, children, clasName = "" }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 rounded-3xl outline-none cursor-pointer relative overflow-hidden border border-transparent bg-indigo-800 ${clasName}`}
    >
      {children}
    </button>
  );
};
