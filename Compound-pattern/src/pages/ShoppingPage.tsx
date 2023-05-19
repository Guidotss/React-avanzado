import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components";
import "../assets/styles/custom-styles.css";
import { products } from '../data'; 
import { useShoppingCart } from "../hooks";


export const ShoppingPage = () => {
  
  const { shoppingCart, onProductCountChange } = useShoppingCart();

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
            className="bg-dark text-white"
            key={product.id}
            product={product}
            value={shoppingCart[product.id]?.count || 0}
            onChange={onProductCountChange}
          >
            <ProductImage className="custom-image" />
            <ProductTitle className="text-bold" />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>
      <div className="shopping-cart">
        <h2>Shopping Cart</h2>
        <hr />
        <div>
          {Object.values(shoppingCart).map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              value={product.count}
              onChange={onProductCountChange}
            >
              <ProductImage />
              <ProductTitle />
              <ProductButtons />
            </ProductCard>
          ))}
        </div>
      </div>
    </div>
  );
};
