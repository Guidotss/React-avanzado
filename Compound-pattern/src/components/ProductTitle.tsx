import { useContext } from 'react';
import { ProductContext } from '.';
import styles from '../assets/styles/styles.module.css'

export const ProductTitle = ({ title = "" }) => {
  const { product } = useContext(ProductContext);
  return (
    <span className={styles.productDescription}>{title || product.title}</span>
  );
};