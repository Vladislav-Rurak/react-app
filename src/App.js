import "./App.css";
import Counter from "./components/Counter";
import Greeting from "./components/Greeting";
import ThemeButton from "./components/ThemeButton/index";
import UsersList from "./components/UserList";
// Компоненты
// функциональные

// классовые
/* <App/>  */

function App() {
  return (
    <>
      {/* <Greeting
        name="Masha"
        isGreeting={false}
      />
      <ThemeButton
        isLightTheme={true}
      />
      <Counter step={2} /> */}
      <UsersList />
    </>
  ); // = Greeting({name:'Masha', isGreeting: true})
  // new Counter().render()
}

export default App;
