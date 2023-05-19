import { useState, useEffect, useRef } from "react";
import { OnchangeArgs, Product } from "../interfaces";

interface useProductArgs {
  product: Product;
  onChange?: (args: OnchangeArgs) => void;
  value?: number;
}

export const useProducts = ({ product,value = 0,onChange, }: useProductArgs) => {
  const [counter, setCounter] = useState<number>(value);
  const isControlled = useRef<boolean>(!!onChange); 


  const inCreaseBy = (value: number) => {

    if(isControlled.current && onChange){ 
      return onChange({ count: value, product });
    }


    const newValue = Math.max(counter + value, 0);

    setCounter(newValue);

    onChange && onChange({ count: newValue, product });
  };

  useEffect(() => {
    setCounter(value);
  }, [value]);

  return {
    counter,

    inCreaseBy,
  };
};
