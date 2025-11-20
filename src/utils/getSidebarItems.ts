import { role } from "@/constants/role";

//import { userSidebarItems } from "@/routes/userSidebarItems";
import { TRole } from "@/types";

export const getSidebarItems = (userRole: TRole) => {
  switch (userRole) {
   
    case role.user:
      return [];
    default:
      return [];
  }
};