import { useAPI } from '../../hooks';

export const APIWhitHook = () => {
  const { data: users, isLoading, error } = useAPI();

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
