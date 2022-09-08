import { Component } from "react";
import SelectedUserList from "./components/SelectedUsersList";
import UsersList from "./components/UserList";
// Компоненты
// функциональные

// классовые
/* <App/>  */

// IMPORTANT!!!
// Повторяющиеся элементы списка должны иметь проп key
// "приколоченный" к передаваемый пропсам

// Взаимодействие компонентов
// 1 Parent => Child: props
// 2 Child => Parent
// 3 Child => Child: use parent

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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: usersDB.map((u) => ({
        ...u,
        isSelected: false,
      })),
    };
  }

  setUsers = (newUsers) => {
    this.setState({ users: newUsers });
  };

  render() {
    const { users } = this.state;
    return (
      <>
        <SelectedUserList
          users={users}
        />
        <UsersList
          users={users}
          setUsers={this.setUsers}
        />
      </>
    );
  }
}

export default App;
