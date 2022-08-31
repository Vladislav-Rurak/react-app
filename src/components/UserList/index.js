import React, {
  Component,
} from "react";
import UsersListItem from "./UserListItem";
// IMPORTANT!!!
// Повторяющиеся элементы списка должны иметь проп key
// "приколоченный" к передаваемый пропсам

// Взаимодействие компонентов
// 1 Parent => Child: props
// 2 Child => Parent

const usersDB = [
  {
    id: 1,
    firstName: "Test",
    lastName: "Testovich",
  },
  {
    id: 2,
    firstName: "John",
    lastName: "Dou",
  },
  {
    id: 3,
    firstName: "Jane",
    lastName: "Dou",
  },
];

class UsersList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: usersDB.map((u) => ({
        ...u,
        isSelected: false,
      })),
      counterSteps: [
        { id: 1, step: 1 },
        { id: 2, step: 10 },
        { id: 3, step: 100 },
      ],
    };
  }

  sortCounter = () => {
    const { counterSteps } = this.state;
    const newCounterSteps = [
      ...counterSteps,
    ];
    newCounterSteps.sort(
      (a, b) => b.step - a.step
    );
    this.setState({
      counterSteps: newCounterSteps,
    });
  };

  mapUsers = (u) => (
    <UsersListItem
      key={u.id}
      user={u}
      selectUser={this.selectUser}
    />
  );

  selectUser = (id) => {
    const { users } = this.state;
    const newUsers = [...users];

    const selectedUserIndex =
      newUsers.findIndex(
        (u) => u.id === id
      );
    newUsers[
      selectedUserIndex
    ].isSelected =
      !newUsers[selectedUserIndex]
        .isSelected;
    this.setState({ users: newUsers });
  };

  render() {
    const { counterSteps } = this.state;
    const { users } = this.state;

    return (
      <>
        {/* <div>
          {counterSteps.map((cS) => (
            <Counter
              key={cS.id}
              step={cS.step}
            />
          ))}
        </div>
        
        <button
          onClick={this.sortCounter}
        >
          Sort
        </button> */}

        <ul>
          {users.map(this.mapUsers)}
        </ul>
      </>
    );
  }
}

export default UsersList;
