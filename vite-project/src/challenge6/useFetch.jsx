import { useEffect } from "react";
import { useState } from "react";
    export const useFetch = (url) => {
        const [data, setData] = useState(null);
        const [isLoading, setIsLoading] = useState(true);
        const [hasError, setHasError] = useState(null);
      
        useEffect(() => {
          const fetchData = async () => {
            setIsLoading(true);
            setHasError(null);
      
            try {
              const response = await fetch(url);
              const data = await response.json();
              setData(data);
            } catch (error) {
              setHasError(error.message);
            }
      
            setIsLoading(false);
          };
      
          fetchData();
        }, [url]);
      
        return { data, isLoading, hasError };
      };
