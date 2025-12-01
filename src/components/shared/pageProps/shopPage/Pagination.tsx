import { useState } from "react";
import Product from "../../Products/Product";
import { paginationItems } from "../../../../constants/product";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

// ----------------------
// TYPES
// ----------------------
interface ProductItem {
  _id: string | number;
  img: string;
  productName: string;
  price: number;       // Product.tsx requires number
  color: string;
  badge: boolean;
  des: string;
  quantity?: number;
}

interface ItemsProps {
  currentItems: ProductItem[];
}

const Items = ({ currentItems }: ItemsProps) => {
  return (
    <>
      {currentItems.map((item) => (
        <div key={item._id} className="w-full">
          <Product
            _id={item._id.toString()}
            img={item.img}
            productName={item.productName}
            price={Number(item.price.toFixed(2))}
            color={item.color}
            badge={item.badge}
            des={item.des}
          />
        </div>
      ))}
    </>
  );
};

interface PaginationProps {
  itemsPerPage: number;
}

// ----------------------
// MAIN PAGINATION COMPONENT
// ----------------------
const Paginate = ({ itemsPerPage }: PaginationProps) => {
  // Convert price from string → number (important fix)
  const items: ProductItem[] = paginationItems.map((item) => ({
    ...item,
    price: Number(item.price), // FIXED
  }));

  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);

  const pageCount = Math.ceil(items.length / itemsPerPage);
  const currentPage = Math.floor(itemOffset / itemsPerPage) + 1;

  const handlePageChange = (page: number) => {
    const newOffset = (page - 1) * itemsPerPage;
    setItemOffset(newOffset);
  };

  return (
    <div>
      {/* ITEMS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mdl:gap-4 lg:gap-10">
        <Items currentItems={currentItems} />
      </div>

      {/* PAGINATION */}
      <div className="flex flex-col mdl:flex-row justify-center mdl:justify-between items-center py-6">

        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
              />
            </PaginationItem>

            {[...Array(pageCount)].map((_, index) => {
              const page = index + 1;
              return (
                <PaginationItem key={page}>
                  <PaginationLink
                    onClick={() => handlePageChange(page)}
                    isActive={page === currentPage}
                  >
                    {page}
                  </PaginationLink>
                </PaginationItem>
              );
            })}

            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>

            <PaginationItem>
              <PaginationNext
                onClick={() =>
                  currentPage < pageCount && handlePageChange(currentPage + 1)
                }
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>

        <p className="text-base font-normal text-lightText mt-3 mdl:mt-0">
          Products from {itemOffset + 1} to {endOffset} of {items.length}
        </p>
      </div>
    </div>
  );
};

export default Paginate;
