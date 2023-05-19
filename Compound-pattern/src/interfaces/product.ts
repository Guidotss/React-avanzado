import {
  ProductButtonsProps,
  ProductCardProps,
  ProductImageProps,
  ProductTitleProps,
} from "../components";

export interface Product {
  id: string;
  title: string;
  image?: string;
}

export interface ProductContextProps {
  counter: number;
  product: Product;
  inCreaseBy: (value: number) => void;
}

export interface ProductCardHOCProps {
  ({ children }: ProductCardProps): React.ReactElement | null;
  Title: (Props: ProductTitleProps) => JSX.Element;
  Image: (Props: ProductImageProps) => JSX.Element;
  Buttons: (Props: ProductButtonsProps) => JSX.Element;
}


export interface OnchangeArgs { 
  product: Product;
  count: number;
}

export interface ProductInCart extends Product {
  count: number;
}
