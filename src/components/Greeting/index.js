// Выражения джаваскрипта в разметке JSX заключаются в {}
import styles from "./Greeting.module.css";

function Greeting(props) {
  const { name, isGreeting } = props;
  return (
    <div className={styles.button}>
      {isGreeting ? "Hello" : "Goodbuy"}{" "}
      {name}!
    </div>
  );
}

export default Greeting;
