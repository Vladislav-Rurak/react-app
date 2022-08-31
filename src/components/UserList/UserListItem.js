function UsersListItem(props) {
  const {
    user: {
      id,
      firstName,
      lastName,
      isSelected,
    },
    selectUser,
  } = props;

  const liStyle = {
    border: "2px dotted green",
  };

  return (
    <li
      onClick={() => selectUser(id)}
      style={
        isSelected ? liStyle : undefined
      }
    >
      {firstName} {lastName}
    </li>
  );
}

export default UsersListItem;
