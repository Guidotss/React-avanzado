import { FC, createContext } from "react";
import { useProducts } from "../hooks";
import styles from "../assets/styles/styles.module.css";
import { OnchangeArgs, Product, ProductContextProps } from "../interfaces";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface ProductCardProps {
  product: Product;
  children?: React.ReactElement | React.ReactElement[];
  className?: string;
  style?: React.CSSProperties;
  onChange?: ( args: OnchangeArgs ) => void; 
  value?: number; 
}

export const ProductCard: FC<ProductCardProps> = ({ product, children, className,style, onChange, value }) => {
  const { counter, inCreaseBy } = useProducts({ onChange, product,value  });
  return (
    <Provider
      value={{
        product,
        counter,

        inCreaseBy,
      }}
    >
      <div 
        className={`${styles.productCard} ${ className }`}
        style={ style }
      >
        {children}
      </div>
    </Provider>
  );
};

