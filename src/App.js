import DataProvider from './components/DataProvider';

const UsersLoadingList = props => {
  const { data: users, isFetching, error } = props.usersData;
  return (
    <>
      {isFetching && <div>Loading...</div>}
      {error && <div>ERROR</div>}
      <ul>
        {users.map(u => (
          <li key={u.id}>
            <img src={u.src} />
            {u.firstName} {u.lastName}
          </li>
        ))}
      </ul>
    </>
  );
};

const PhonesLoadingList = props => {
  const { data: phones, isFetching, error } = props.phonesData;
  return (
    <>
      {isFetching && <div>Loading...</div>}
      {error && <div>ERROR</div>}
      <ol>
        {phones.map(p => (
          <li key={p.id}>
            {p.brand} {p.model}: {p.price}
          </li>
        ))}
      </ol>
    </>
  );
};

const App = () => (
  <>
    <DataProvider
      fileName='./users.json'
      render={usersData => <UsersLoadingList usersData={usersData} />}
    />
    <DataProvider
      fileName='./phones.json'
      render={phonesData => <PhonesLoadingList phonesData={phonesData} />}
    />
  </>
);

export default App;
