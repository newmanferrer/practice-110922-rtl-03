import { useState, useEffect } from 'react';
import { IUser } from '../../models';

interface IError {
  hasError: boolean;
  message: string;
}

const errorInitialState: IError = {
  hasError: false,
  message: ''
};

export function useAPI() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(errorInitialState);
  const [data, setData] = useState<IUser[]>([]);

  useEffect(() => {
    let isMounted = true;
    setError(errorInitialState);
    setIsLoading(true);

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        if (!response.ok) throw new Error(`Error code: ${response.status}`);
        return response.json();
      })
      .then(data => {
        if (isMounted) {
          setData(data);
        }
      })
      .catch(error => handlerError(error))
      .finally(() => setIsLoading(false));

    return () => {
      isMounted = false;
    };
  }, []);

  const handlerError = (error: any) => {
    setError({
      hasError: true,
      message: error.message
    });
  };

  return { data, isLoading, error };
}
