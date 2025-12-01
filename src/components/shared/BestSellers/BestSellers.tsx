import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  bestSellerOne,
  bestSellerTwo,
  bestSellerThree,
  bestSellerFour,
} from "../../../assets/images/index";

interface ProductItem {
  _id: string;
  img: string;
  productName: string;
  price: number;
  color: string;
  badge: boolean;
  des: string;
}

const products: ProductItem[] = [
  {
    _id: "1011",
    img: bestSellerOne,
    productName: "Flower Base",
    price: 35.0,
    color: "Black and White",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    _id: "1012",
    img: bestSellerTwo,
    productName: "New Backpack",
    price: 180.0,
    color: "Gray",
    badge: false,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    _id: "1013",
    img: bestSellerThree,
    productName: "Household materials",
    price: 25.0,
    color: "Mixed",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    _id: "1014",
    img: bestSellerFour,
    productName: "Travel Bag",
    price: 220.0,
    color: "Black",
    badge: false,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  },
];


const BestSellers: React.FC = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Our Bestsellers" />

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        {products.map((item) => (
          <Product key={item._id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default BestSellers;
