import { ReactNode } from "react";
import Footer from "../shared/Footer/Footer";
import FooterBottom from "../shared/Footer/FooterBottom";
import Header from "../shared/Header/Header";
import HeaderBottom from "../shared/Header/HeaderBottom";

interface IProps {
  children: ReactNode;
}

export default function CommonLayout({ children }: IProps) {
  return (
    <div className=" min-h-screen flex flex-col">
      <Header />
      <HeaderBottom />
      <div className="grow-1">{children}</div>
      <Footer />
      <FooterBottom />
    </div>
  );
}