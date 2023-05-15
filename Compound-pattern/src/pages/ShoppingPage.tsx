import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components";
import "../assets/styles/custom-styles.css";

const product = {
  id: "1",
  title: "Coffee Mug",
  image: "../../public/coffee-mug.png",
};

export const ShoppingPage = () => {
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
        <ProductCard product={product}>
          <ProductCard.Image />
          <ProductCard.Title className="text-bold" />
          <ProductCard.Buttons />
        </ProductCard>

        <ProductCard product={product} className="bg-dark text-white">
          <ProductImage className="custom-image" />
          <ProductTitle className="text-bold" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>

        <ProductCard
          product={product}
          style={{
            backgroundColor: "lightblue",
          }}
        >
          <ProductImage />
          <ProductTitle />
          <ProductButtons
            style={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          />
        </ProductCard>
      </div>
    </div>
  );
};
