
export interface ProdutCardProps {
  product: Product;
  children?: React.ReactElement | React.ReactElement[];
}

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
  Image: ({ image }: { image?: string | undefined }) => JSX.Element;
  Title: ({ title }: { title?: string | undefined }) => JSX.Element;
  Buttons: () => JSX.Element;
}
