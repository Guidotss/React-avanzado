import { useState } from 'react';


export const useProducts = () => {
    const [ counter,setCounter ] = useState<number>(0);

    const inCreaseBy = (value: number) => {
      setCounter(prev => Math.max(prev + value, 0)); 
    }


    return {
        counter,

        inCreaseBy,
    }
}