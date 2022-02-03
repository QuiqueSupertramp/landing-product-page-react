import { useEffect, useState } from 'react';

const useWidth = () => {
    const [innerWidth, setInnerWidth] = useState(window.innerWidth);

    useEffect(() => {
      window.addEventListener("resize", ()=> setInnerWidth(window.innerWidth))
    
      return () => {
        window.removeEventListener("resize", ()=> setInnerWidth(window.innerWidth))
      };
    }, []);
    

    return {innerWidth}
};

export default useWidth;
