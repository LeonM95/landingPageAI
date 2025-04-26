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
      className={`px-6 py-3 rounded-full outline-none cursor-pointer
                 relative overflow-hidden border border-transparent bg-violet-600 ${clasName}`}
    >
      <span className="relative z-10 text-white">{text}</span>
    </a>
  );
};
