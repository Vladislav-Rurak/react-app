import React from "react";

// коллбек map можно вынести в отдельную функцию

function SelectedUserList(props) {
  const { users } = props;
  const selectedUsers = users.filter(
    (u) => u.isSelected
  );

  return (
    <ol>
      {selectedUsers.map(
        (id, firstName, lastName) => (
          <li key={id}>
            {firstName} {lastName}
          </li>
        )
      )}
    </ol>
  );
}

export default SelectedUserList;
