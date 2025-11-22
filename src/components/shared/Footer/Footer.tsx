import { useState} from "react";
import type { ChangeEvent } from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaYoutube, FaLinkedin, FaGithub } from "react-icons/fa";
import FooterListTitle from "./FooterListTitle";
import { paymentCard } from "../../../assets/images";
import Image from "../../designLayouts/Image";

const Footer = () => {
  const [emailInfo, setEmailInfo] = useState<string>("");
  const [subscription, setSubscription] = useState<boolean>(false);
  const [errMsg, setErrMsg] = useState<string>("");

  const emailValidation = (email: string): boolean => {
    return /^[\w.-]+@[\w.-]+\.\w{2,3}$/.test(email.toLowerCase());
  };

  const handleSubscription = (): void => {
    if (emailInfo === "") {
      setErrMsg("Please provide an Email !");
    } else if (!emailValidation(emailInfo)) {
      setErrMsg("Please give a valid Email!");
    } else {
      setSubscription(true);
      setErrMsg("");
      setEmailInfo("");
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setEmailInfo(e.target.value);
  };

  return (
    <div className="w-full bg-[#F5F5F3] py-20">
      <div className="max-w-container mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 px-4 gap-10">
        {/* Column 1: About */}
        <div className="col-span-2">
          <FooterListTitle title=" More about Ashta Shop" />
          <div className="flex flex-col gap-6">
            <p className="text-base w-full xl:w-[80%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint
              ab ullam, numquam nesciunt in.
            </p>
            <ul className="flex items-center gap-2">
              {[
                {
                  href: "https://www.youtube.com/@reactjsBD",
                  icon: <FaYoutube />,
                },
                {
                  href: "https://github.com/noorjsdivs",
                  icon: <FaGithub />,
                },
                {
                  href: "https://www.facebook.com/Noorlalu143/",
                  icon: <FaFacebook />,
                },
                {
                  href: "https://www.linkedin.com/in/noor-mohammad-ab2245193/",
                  icon: <FaLinkedin />,
                },
              ].map(({ href, icon }, idx) => (
                <a key={idx} href={href} target="_blank" rel="noreferrer">
                  <li className="w-7 h-7 bg-primeColor text-gray-100 hover:text-white cursor-pointer text-lg rounded-full flex justify-center items-center hover:bg-black duration-300">
                    {icon}
                  </li>
                </a>
              ))}
            </ul>
          </div>
        </div>

        {/* Column 2: Shop */}
        <div>
          <FooterListTitle title="Shop" />
          <ul className="flex flex-col gap-2">
            {["Accesories", "Clothes", "Electronics", "Home appliances", "New Arrivals"].map((item) => (
              <li key={item} className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Account */}
        <div>
          <FooterListTitle title="Your account" />
          <ul className="flex flex-col gap-2">
            {["Profile", "Orders", "Addresses", "Account Details", "Payment Options"].map((item) => (
              <li key={item} className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Newsletter */}
        <div className="col-span-2 flex flex-col items-center w-full px-4">
          <FooterListTitle title="Subscribe to our newsletter." />
          <div className="w-full">
            <p className="text-center mb-4">
              A at pellentesque et mattis porta enim elementum.
            </p>
            {subscription ? (
              <motion.p
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full text-center text-base font-titleFont font-semibold text-green-600"
              >
                Subscribed Successfully !
              </motion.p>
            ) : (
              <div className="w-full flex-col xl:flex-row flex justify-between items-center gap-4">
                <div className="flex flex-col w-full">
                  <input
                    onChange={handleChange}
                    value={emailInfo}
                    className="w-full h-12 border-b border-gray-400 bg-transparent px-4 text-primeColor text-lg placeholder:text-base outline-none"
                    type="text"
                    placeholder="Insert your email ...*"
                  />
                  {errMsg && (
                    <p className="text-red-600 text-sm font-semibold font-titleFont text-center animate-bounce mt-2">
                      {errMsg}
                    </p>
                  )}
                </div>
                <button
                  onClick={handleSubscription}
                  className="bg-white text-lightText w-[30%] h-10 hover:bg-black hover:text-white duration-300 text-base tracking-wide"
                >
                  Subscribe
                </button>
              </div>
            )}
            <Image
              className={`w-[80%] lg:w-[60%] mx-auto ${
                subscription ? "mt-2" : "mt-6"
              }`}
              imgSrc={paymentCard}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
