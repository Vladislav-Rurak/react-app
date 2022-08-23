import "./App.css";
import Greeting from "./components/Greeting";
import ThemeButton from "./components/ThemeButton/index";
// Компоненты
// функциональные

// классовые
/* <App/>  */

function App() {
  return (
    <>
      <Greeting
        name="Masha"
        isGreeting={false}
      />
      <ThemeButton
        isLightTheme={true}
      />
    </>
  ); // = Greeting({name:'Masha', isGreeting: true})
}

export default App;
