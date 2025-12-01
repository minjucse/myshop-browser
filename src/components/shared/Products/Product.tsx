
import { BsSuitHeartFill } from "react-icons/bs";
import { GiReturnArrow } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineLabelImportant } from "react-icons/md";
import Image from "../../designLayouts/Image";
import Badge from "./Badge";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/features/myshop/cartSlice";

// --------------------------------------------
// Props Interface
// --------------------------------------------
interface ProductProps {
  _id: string;
  productName: string;
  img: string;
  price: number;
  color: string;
  badge?: boolean;
  des?: string;
}

// --------------------------------------------
// Component
// --------------------------------------------
const Product = (props: ProductProps) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Convert product name into slug
  const createSlug = (value: string): string =>
    value.toLowerCase().split(" ").join("");

  const rootId = createSlug(props.productName);

  const handleProductDetails = () => {
    navigate(`/product/${rootId}`, {
      state: {
        item: props,
      },
    });
  };

  return (
    <div className="w-full relative group">
      <div className="max-w-80 max-h-80 relative overflow-y-hidden">
        <Image className="w-full h-full" imgSrc={props.img} />

        {props.badge && (
          <div className="absolute top-6 left-8">
            <Badge text="New" />
          </div>
        )}

        <div className="w-full h-32 absolute bg-white -bottom-[130px] group-hover:bottom-0 duration-700">
          <ul className="w-full h-full flex flex-col items-end justify-center gap-2 font-titleFont px-2 border-l border-r">

            {/* Compare */}
            <li className="text-[#767676] hover:text-primeColor text-sm font-normal border-b border-b-gray-200 hover:border-b-primeColor flex items-center justify-end gap-2 cursor-pointer pb-1 duration-300 w-full">
              Compare
              <GiReturnArrow />
            </li>

            {/* Add To Cart */}
            <li
              onClick={() =>
                dispatch(
                  addToCart({
                    _id: props._id,
                    title: props.productName, // matches Product interface
                    price: props.price,
                    quantity: 1,
                    image: props.img,
                    color: props.color,
                    badge: props.badge,
                  })
                )
              }
              className="text-[#767676] hover:text-primeColor text-sm font-normal border-b border-b-gray-200 hover:border-b-primeColor flex items-center justify-end gap-2 cursor-pointer pb-1 duration-300 w-full"
            >
              Add to Cart
              <FaShoppingCart />
            </li>

            {/* View Details */}
            <li
              onClick={handleProductDetails}
              className="text-[#767676] hover:text-primeColor text-sm font-normal border-b border-b-gray-200 hover:border-b-primeColor flex items-center justify-end gap-2 cursor-pointer pb-1 duration-300 w-full"
            >
              View Details
              <span className="text-lg">
                <MdOutlineLabelImportant />
              </span>
            </li>

            {/* Wish List */}
            <li className="text-[#767676] hover:text-primeColor text-sm font-normal border-b border-b-gray-200 hover:border-b-primeColor flex items-center justify-end gap-2 cursor-pointer pb-1 duration-300 w-full">
              Add to Wishlist
              <BsSuitHeartFill />
            </li>

          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-80 py-6 flex flex-col gap-1 border border-t-0 px-4">
        <div className="flex items-center justify-between font-titleFont">
          <h2 className="text-lg text-primeColor font-bold">
            {props.productName}
          </h2>
          <p className="text-[#767676] text-[14px]">${props.price}</p>
        </div>

        <p className="text-[#767676] text-[14px]">{props.color}</p>
      </div>
    </div>
  );
};

export default Product;
