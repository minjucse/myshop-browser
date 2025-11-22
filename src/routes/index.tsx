import App from "@/App";
import DashboardLayout from "@/components/layout/DashboardLayout";
import About from "@/pages/About";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Verify from "@/pages/Verify";
import { generateRoutes } from "@/utils/generateRoutes";
import { createBrowserRouter, Navigate } from "react-router";
import { userSidebarItems } from "./userSidebarItems";
import { withAuth } from "@/utils/withAuth";
import Unauthorized from "@/pages/Unauthorized";
import { role } from "@/constants/role";
import { TRole } from "@/types";

// New Pages
import Shop from "@/pages/Shop";
import Homepage from "@/pages/Homepage";
import Contact from "@/pages/Contact";
// import Journal from "@/pages/Journal";
import Offer from "@/pages/Offer";
import ProductDetails from "@/pages/ProductDetails";
import Cart from "@/pages/Cart/Cart";
import Payment from "@/pages/Payment/Payment";
import Success from "@/pages/Payment/Success";
import Fail from "@/pages/Payment/Fail";
import Booking from "@/pages/Booking";

export const router = createBrowserRouter([
  {
    Component: App,
    path: "/",
    children: [
      { index: true, Component: Homepage },

      { path: "shop", Component: Shop },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
      
      { path: "offer", Component: Offer },

      { path: "product/:_id", Component: ProductDetails },
      { path: "cart", Component: Cart },
      { path: "paymentgateway", Component: Payment },

      // Existing routes you had
      { path: "tours/:id", Component: ProductDetails },
      { path: "booking/:id", Component: withAuth(Booking) },
    ],
  },

  // USER dashboard routes
  {
    Component: withAuth(DashboardLayout, role.user as TRole),
    path: "/user",
    children: [
      { index: true, element: <Navigate to="/user/bookings" /> },
      ...generateRoutes(userSidebarItems),
    ],
  },

  // AUTH pages
  { path: "/login", Component: Login },
  { path: "/register", Component: Register },
  { path: "/verify", Component: Verify },

  // Others
  { path: "/unauthorized", Component: Unauthorized },
  { path: "/payment/success", Component: Success },
  { path: "/payment/fail", Component: Fail },
]);
