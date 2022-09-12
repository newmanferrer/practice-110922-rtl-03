import { useState, useEffect } from 'react';
import { IUser } from '../../models';

export function useAPI() {
  const [data, setData] = useState<IUser[]>([]);

  useEffect(() => {
    let isMounted = true;
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
      .catch(error => console.error(error));

    return () => {
      isMounted = false;
    };
  }, []);

  return { data };
}
