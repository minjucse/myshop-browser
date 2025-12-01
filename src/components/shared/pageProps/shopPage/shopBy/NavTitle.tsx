import { BiCaretDown } from "react-icons/bi";

interface NavTitleProps {
  title: string;
  icons?: boolean;
}

const NavTitle = ({ title, icons }: NavTitleProps) => {
  return (
    <div className="flex items-center justify-between pb-5">
      <h3 className="font-bold lg:text-xl text-primeColor">{title}</h3>
      {icons && <BiCaretDown />}
    </div>
  );
};

export default NavTitle;

