import { useEffect, useState } from 'react';
import loadUsers from '../../api';

function UsersLoaderH () {
  const [users, setUsers] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(
    Number(window.localStorage.getItem('page')) || 1
  );

  const load = () => {
    setIsFetching(true);
    loadUsers({ currentPage })
      .then(({ results }) => setUsers(results))
      .catch(e => {
        setError(e);
      })
      .finally(() => setIsFetching(false));
  };

  useEffect(() => {
    load();
  }, [currentPage]);

  useEffect(() => {
    window.localStorage.setItem('page', currentPage);
  }, [currentPage]);

  const increment = () => {
    setCurrentPage(currentPage => currentPage + 1);
  };

  const decriment = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage => currentPage - 1);
    }
  };

  return (
    <>
      <p>{currentPage}</p>
      <button onClick={decriment}>Back</button>
      <button onClick={increment}>Forward</button>
      {error && <div style={{ color: 'red' }}>!!!ERROR!!!</div>}
      {isFetching && <div>Loading please wait...</div>}
      <ul>
        {users.map(u => (
          <li key={u.login.uuid}>{JSON.stringify(u)}</li>
        ))}
      </ul>
    </>
  );
}

export default UsersLoaderH;
