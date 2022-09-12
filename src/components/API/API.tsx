import { useState, useEffect } from 'react';
import { IUser } from '../../models';

interface IError {
  hasError: boolean;
  message: string;
}

const usersInitialState: IUser[] = [];

const errorInitialState: IError = {
  hasError: false,
  message: ''
};

export const API = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(errorInitialState);
  const [users, setUser] = useState<IUser[]>(usersInitialState);

  useEffect(() => {
    let isMounted = true;
    setError(errorInitialState);
    setIsLoading(true);

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        if (!response.ok) throw new Error(`Error code: ${response.status}`);
        return response.json();
      })
      .then(users => {
        if (isMounted) {
          setUser(users);
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

  return (
    <div>
      {isLoading && <div aria-label='loader'>Loading...</div>}
      {!isLoading && error.hasError && <div aria-label='errorContainer'>{error.message}</div>}
      {!isLoading &&
        !error.hasError &&
        users &&
        users.map(user => (
          <div key={user.id} aria-label={`nameContainer-${user.id}`}>
            Name is {user.name}
          </div>
        ))}
    </div>
  );
};
