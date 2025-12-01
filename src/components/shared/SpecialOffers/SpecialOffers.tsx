import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  spfOne,
  spfTwo,
  spfThree,
  spfFour,
} from "../../../assets/images";

interface OfferProduct {
  _id: string;
  img: string;
  productName: string;
  price: number;
  color: string;
  badge: boolean;
  des: string;
}

const specialOfferProducts: OfferProduct[] = [
  {
    _id: "1101",
    img: spfOne,
    productName: "Cap for Boys",
    price: 35.0,
    color: "Black and White",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: "1102",
    img: spfTwo,
    productName: "Tea Table",
    price: 180.0,
    color: "Gray",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: "1103",
    img: spfThree,
    productName: "Headphones",
    price: 25.0,
    color: "Mixed",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: "1104",
    img: spfFour,
    productName: "Sun glasses",
    price: 220.0,
    color: "Black",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
];

const SpecialOffers: React.FC = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Special Offers" />

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        {specialOfferProducts.map((item) => (
          <Product key={item._id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default SpecialOffers;
