import { Component } from 'react';
import CONSTANTS from './constants';
import { UserContext, ThemeContext } from './contexts';
import UserPage from './pages/UserPage';

// function ChildCheldPage (props) {
//   return (
//     <ValueContext.Consumer>{value => <div>{value}</div>}</ValueContext.Consumer>
//   );
// }

// function ChildPage (props) {
//   return <ChildCheldPage />;
// }

// class App extends Component {
//   constructor (props) {
//     super(props);

//     this.state = {
//       step: 6,
//     };
//   }

//   render () {
//     const { step } = this.state;
//     return (
//       <ValueContext.Provider value={step}>
//         <ChildPage />
//       </ValueContext.Provider>
//     );
//   }
// }

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      user: {
        src:
          'https://png.pngtree.com/png-vector/20190704/ourlarge/pngtree-businessman-user-avatar-free-vector-png-image_1538405.jpg',
        firstName: 'Test',
        lastName: 'Testovich',
      },
      theme: CONSTANTS.THEMES.LIGHT,
    };
  }

  setTheme = () =>
    this.setState(theme => ({
      theme:
        theme === CONSTANTS.THEMES.LIGHT
          ? CONSTANTS.THEMES.DARK
          : CONSTANTS.THEMES.LIGHT,
    }));

  render () {
    const { user, theme } = this.state;
    return (
      <ThemeContext.Provider value={[theme, this.setTheme]}>
        <UserContext.Provider value={user}>
          <UserPage />
        </UserContext.Provider>
      </ThemeContext.Provider>
    );
  }
}

export default App;
