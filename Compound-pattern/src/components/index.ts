export * from './ProductImage';  
export * from './ProductTitle'
export * from './ProductButtons'; 
export * from './ProductCard';

import { ProductImage } from './ProductImage';  
import { ProductTitle } from './ProductTitle'
import { ProductButtons } from './ProductButtons'; 


import { ProductCard as ProductCardHoc } from './ProductCard';
import { ProductCardHOCProps } from '../interfaces';




export const ProductCard:ProductCardHOCProps = Object.assign(ProductCardHoc, {
    Image: ProductImage,
    Title: ProductTitle,
    Buttons: ProductButtons,
}); 
export default ProductCardHoc;