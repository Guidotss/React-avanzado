import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components";
import "../assets/styles/custom-styles.css";
import { Product } from "../interfaces";
import { useState } from 'react';

const product = {
  id: "1",
  title: "Coffee Mug",
  image: "../../public/coffee-mug.png",
};

const product2 = {
  id: "2",
  title: "Coffee Mug",
  image: "../../public/coffeemug2.png",
};

const products: Product[] = [product, product2];

interface ProductInCart extends Product {
  count: number;
}

export const ShoppingPage = () => {

  const [ shoppingCart, setShoppingCart ] = useState<{ [key:string]:ProductInCart }>({});

  

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            className="bg-dark text-white"
          >
            <ProductImage className="custom-image" />
            <ProductTitle className="text-bold" />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>
      <div className="shopping-cart">
        <ProductCard
          product={product}
          className="bg-dark text-white"
          style={{
            width: "100px",
          }}
        >
          <ProductImage className="custom-image" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>
        <ProductCard
          product={product2}
          className="bg-dark text-white"
          style={{
            width: "100px",
          }}
        >
          <ProductImage className="custom-image" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>
      </div>
    </div>
  );
};
