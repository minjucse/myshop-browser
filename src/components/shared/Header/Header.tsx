import { useEffect, useState } from "react";
import { Link, NavLink} from "react-router";
import { HiMenuAlt2 } from "react-icons/hi";
import { motion } from "framer-motion";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NavigationMenu, NavigationMenuList } from "@/components/ui/navigation-menu";

import { logo, logoLight } from "../../../assets/images";

export const navBarList = [
  { _id: 1001, href: "/", label: "Home" },
  { _id: 1002, href: "/shop", label: "Shop" },
  { _id: 1003, href: "/about", label: "About" },
  { _id: 1004, href: "/contact", label: "Contact" },
  //{ _id: 1005, href: "/journal", label: "Journal" },
];

const Header = () => {
  const [showMenu, setShowMenu] = useState(true);

  useEffect(() => {
    let ResponsiveMenu = () => {
      setShowMenu(window.innerWidth >= 667);
    };
    ResponsiveMenu();
    window.addEventListener("resize", ResponsiveMenu);
  }, []);

  return (
    <div className="w-full h-20 bg-white sticky top-0 z-50 border-b border-gray-200">
      <nav className="h-full px-4 max-w-container mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/">
          <img src={logo} className="w-20 object-cover" />
        </Link>

        {/* Desktop Menu */}
        {showMenu && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <NavigationMenu>
              <NavigationMenuList className="flex gap-6">
                {navBarList.map((item) => (
                  <NavLink
                    key={item.href}
                    to={item.href}
                    className={({ isActive }) =>
                      `text-base px-2 hover:underline underline-offset-4 ${
                        isActive ? "text-black font-medium" : "text-gray-600"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </motion.div>
        )}

        {/* Mobile Menu (Shadcn Sheet) */}
        {!showMenu && (
          <Sheet>
            <SheetTrigger>
              <HiMenuAlt2 className="w-8 h-6 cursor-pointer" />
            </SheetTrigger>

            <SheetContent side="left" className="w-[80%] p-6 bg-white">
              {/* Logo */}
              <img src={logoLight} className="w-28 mb-6" />

              <ul className="flex flex-col gap-4">
                {navBarList.map((item) => (
                  <NavLink
                    key={item.href}
                    to={item.href}
                    className="text-lg text-gray-700 hover:underline underline-offset-4"
                  >
                    {item.label}
                  </NavLink>
                ))}
              </ul>

              {/* CATEGORY */}
              <AccordionSection title="Shop by Category">
                {["New Arrivals", "Gadgets", "Accessories", "Electronics", "Others"].map(
                  (c) => (
                    <li key={c} className="pl-4 py-1 text-sm text-gray-700">
                      {c}
                    </li>
                  )
                )}
              </AccordionSection>

              {/* BRAND */}
              <AccordionSection title="Shop by Brand">
                {["Apple", "Samsung", "Sony", "Huawei", "Others"].map((b) => (
                  <li key={b} className="pl-4 py-1 text-sm text-gray-700">
                    {b}
                  </li>
                ))}
              </AccordionSection>
            </SheetContent>
          </Sheet>
        )}
      </nav>
    </div>
  );
};

export default Header;

// --------------------------------------------------
// Small Accordion component for mobile menu
// --------------------------------------------------

const AccordionSection = ({ title, children }: any) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-4">
      <h1
        onClick={() => setOpen(!open)}
        className="flex justify-between text-base cursor-pointer items-center font-medium"
      >
        {title}
        <span>{open ? "-" : "+"}</span>
      </h1>

      {open && (
        <motion.ul
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col gap-1 mt-2"
        >
          {children}
        </motion.ul>
      )}
    </div>
  );
};
