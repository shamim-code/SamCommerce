import React from "react";
import { Button } from "../ui/button";
import ProductCard from "../ProductCard/ProductCard";

export default function Trending() {
  const products = [
    {
      id: 1,
      title: "Classic T-Shirt",
      price: 19.99,
      discount: 10,
      rating: 4.5,
      imageUrl: "https://i.ibb.co/MGpGZsT/tshir.jpg",
    },
    {
      id: 2,
      title: "Premium T-Shirt",
      price: 24.99,
      discount: 15,
      rating: 4.8,
      imageUrl: "https://i.ibb.co/MGpGZsT/tshir.jpg",
    },
    {
      id: 3,
      title: "Eco-Friendly T-Shirt",
      price: 17.99,
      discount: 5,
      rating: 4.3,
      imageUrl: "https://i.ibb.co/MGpGZsT/tshir.jpg",
    },
    {
      id: 4,
      title: "V-Neck T-Shirt",
      price: 21.99,
      discount: 12,
      rating: 4.7,
      imageUrl: "https://i.ibb.co/MGpGZsT/tshir.jpg",
    },
    {
      id: 5,
      title: "Graphic T-Shirt",
      price: 22.99,
      discount: 8,
      rating: 4.6,
      imageUrl: "https://i.ibb.co/MGpGZsT/tshir.jpg",
    },
    {
      id: 6,
      title: "Long Sleeve T-Shirt",
      price: 25.99,
      discount: 10,
      rating: 4.4,
      imageUrl: "https://i.ibb.co/MGpGZsT/tshir.jpg",
    },
    {
      id: 7,
      title: "Polo T-Shirt",
      price: 29.99,
      discount: 18,
      rating: 4.9,
      imageUrl: "https://i.ibb.co/MGpGZsT/tshir.jpg",
    },
    {
      id: 8,
      title: "Slim Fit T-Shirt",
      price: 20.99,
      discount: 7,
      rating: 4.2,
      imageUrl: "https://i.ibb.co/MGpGZsT/tshir.jpg",
    },
  ];

  return (
    <div className="mt-10 mx-1 ">
      <div id="top" className="flex items-center gap-1">
        <span className="h-5 w-2 bg-orange-500" />
        <h1 className=" font-semibold text-slate-800 text-lg">Trending</h1>
      </div>

      <div
        id="container"
        className="flex flex-wrap justify-around items-center p-4"
      >
        {products.map((product, i) => (
          <ProductCard
            key={product.id}
            title={product.title}
            id={product.id}
            price={product.price}
            discount={product.discount}
            rating={product.rating}
            img={product.imageUrl}
          />
        ))}
      </div>

      <div className="flex justify-center mt-2">
        <Button className="h-8 w-24 bg-orange-500">See More</Button>
      </div>
    </div>
  );
}
