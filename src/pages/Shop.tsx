import { useState } from "react";
import Breadcrumbs from "@/components/shared/pageProps/Breadcrumbs";
import Pagination from "@/components/shared/pageProps/shopPage/Pagination";
import ProductBanner from "@/components/shared/pageProps/shopPage/ProductBanner";
import ShopSideNav from "@/components/shared/pageProps/shopPage/ShopSideNav";

const Shop = () => {
  // State typed as number
  const [itemsPerPage, setItemsPerPage] = useState<number>(12);

  // Callback type: receives a number
  const itemsPerPageFromBanner = (value: number) => {
    setItemsPerPage(value);
  };

  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Products" />

      <div className="w-full h-full flex pb-20 gap-10">
        <div className="hidden md:inline-flex w-[25%] h-full">
          <ShopSideNav />
        </div>

        <div className="w-full mdl:w-[80%] lgl:w-[75%] h-full flex flex-col gap-10">
          <ProductBanner itemsPerPageFromBanner={itemsPerPageFromBanner} />
          <Pagination itemsPerPage={itemsPerPage} />
        </div>
      </div>
    </div>
  );
};

export default Shop;
