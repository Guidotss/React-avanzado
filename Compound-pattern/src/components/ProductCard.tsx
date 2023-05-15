import { FC, createContext } from "react";
import { useProducts } from "../hooks";
import styles from "../assets/styles/styles.module.css";
import { ProductContextProps, ProdutCardProps } from "../interfaces";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard: FC<ProdutCardProps> = ({ product, children }) => {
  const { counter, inCreaseBy } = useProducts();
  return (
    <Provider
      value={{
        product,
        counter,

        inCreaseBy,
      }}
    >
      <div className={styles.productCard}>
        {children}
      </div>
    </Provider>
  );
};

