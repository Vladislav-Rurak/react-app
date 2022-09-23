import React from 'react';

const ListItem = props => {
  const { children } = props;
  return <div>{children}</div>;
};

const NamedList = props => {
  const { name, children } = props;
  return (
    <div>
      <h2>{name}</h2>
      <ul>{children}</ul>
    </div>
  );
};

const App = () => (
  <NamedList name='Odd numbers'>
    <li>1</li>
    <li>3</li>
    <li>5</li>
  </NamedList>
);

export default App;
