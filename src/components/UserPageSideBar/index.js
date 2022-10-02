import { UserContext } from '../../contexts';

function UserPageSideBar (props) {
  return (
    <UserContext.Consumer>
      {user => {
        return <div>Hello, {user.firstName}</div>;
      }}
    </UserContext.Consumer>
  );
}

export default UserPageSideBar;
