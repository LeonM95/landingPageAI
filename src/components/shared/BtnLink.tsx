interface BtnLinkProps {
  //parameters
  href: string;
  text: string;
  clasName?: string;
}

//return a link to redirect
export const BtnLink = ({ href, text, clasName = "" }: BtnLinkProps) => {
  return (
    <a
      href={href} // user prompt className to change to dark mode
      className={`px-6 py-3 rounded-3xl outline-none cursor-pointer
                 relative overflow-hidden border border-transparent bg-indigo-800 ${clasName}`}
    >
      <span className="relative z-10 text-white">{text}</span>
    </a>
  );
};
