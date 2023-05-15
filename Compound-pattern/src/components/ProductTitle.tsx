import { useContext, FC } from 'react';
import { ProductContext } from '.';
import styles from '../assets/styles/styles.module.css'


export interface ProductTitleProps {
  title?: string;
  className?: string; 
  style?: React.CSSProperties;
}

export const ProductTitle:FC<ProductTitleProps> = ({ title= "", className, style }) => {
  const { product } = useContext(ProductContext);
  return (
    <span 
      className={`${styles.productDescription} ${ className }`}
      style={ style }
    >
        {title || product.title}
    </span>
  );
};
