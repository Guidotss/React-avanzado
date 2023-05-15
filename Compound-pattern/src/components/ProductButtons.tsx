import { useContext } from 'react';
import { ProductContext } from '.';
import styles from "../assets/styles/styles.module.css";

export const ProductButtons = () => {

    const { counter, inCreaseBy } = useContext(ProductContext)
  
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
}