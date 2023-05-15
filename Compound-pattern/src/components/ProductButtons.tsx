import { useContext, FC } from 'react';
import { ProductContext } from '.';
import styles from "../assets/styles/styles.module.css";

export interface ProductButtonsProps {
  className?: string;
  style?: React.CSSProperties;
}

export const ProductButtons:FC<ProductButtonsProps> = ({ className,style }) => {

    const { counter, inCreaseBy } = useContext(ProductContext)
  
    return (
      <div 
        style={ style }
        className={`${styles.buttonsContainer} ${ className }`}
      >
        <button className={styles.buttonMinus} onClick={() => inCreaseBy(-1)}>
          -
        </button>
        <div className={styles.countLabel}>{counter}</div>
        <button className={styles.buttonAdd} onClick={() => inCreaseBy(1)}>
          +
        </button>
      </div>
    );
}