import { useContext } from 'react';
import { ProductContext } from '.';
import noImage from '../assets/no-image.jpg'; 
import styles from '../assets/styles/styles.module.css'


export const ProductImage = ({ image = "" }) => {
  const { product } = useContext(ProductContext);
  let imageSrc: string;

  if (image) {
    imageSrc = image;
  } else if (product.image) {
    imageSrc = product.image;
  } else {
    imageSrc = noImage;
  }

  return (
    <img className={styles.productImg} src={imageSrc} alt={product.title} />
  );
};