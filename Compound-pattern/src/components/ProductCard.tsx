import { FC, ReactElement } from "react";
import { useProducts } from "../hooks";
import styles from "../assets/styles/styles.module.css";
import noImage from "../assets/no-image.jpg";

interface ProdutCardProps  {
  product: Product;
  children?: ReactElement | ReactElement[];

  Title: FC<{ title: string }>;
  Image: FC<{ image: string; title: string }>;
}

interface Product {
  id: string;
  title: string;
  image?: string;
}

interface ProductButtonsProps {
  counter: number;
  inCreaseBy: (value: number) => void; 
}

export const ProductImage = ({ image = "", title = "" }) => {
  return (
    <img className={styles.productImg} src={image || noImage} alt={title} />
  );
};

export const ProductTitle = ({ title = "" }) => {
  return <span className={styles.productDescription}>{title}</span>;
};

export const ProductButtons: FC<ProductButtonsProps> = ({
  counter,
  inCreaseBy,
}) => {
  return (
    <div className={styles.buttonsContainer}>
      <button className={styles.buttonMinus} onClick={() => inCreaseBy(-1)}>
        -
      </button>
      <div className={styles.countLabel}>{counter}</div>
      <button className={styles.buttonAdd} onClick={() => inCreaseBy(1)}>
        +
      </button>
    </div>
  );
};

export const ProductCard: FC<ProdutCardProps> = ({ product,children }) => {
  const { counter, inCreaseBy } = useProducts();

  return (
    <div className={styles.productCard}>
      { children }
      {/* <ProductImage image={product.image} title={product.title} />
      <ProductTitle title={product.title} />

      <ProductButtons counter={counter} inCreaseBy={inCreaseBy} /> */}
    </div>
  );
};



ProductCard.Title = ProductTitle;
ProductCard.Image = ProductImage;

