import { useContext, FC } from 'react';
import { ProductContext } from '.';
import noImage from '../assets/no-image.jpg'; 
import styles from '../assets/styles/styles.module.css'


export interface ProductImageProps {
  image?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const ProductImage:FC<ProductImageProps> = ({ image= "", className,style }) => {
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
    <img 
      style={ style }
      className={`${styles.productImg} ${ className }`} 
      src={imageSrc} 
      alt={product.title} 
    />
  );
};
