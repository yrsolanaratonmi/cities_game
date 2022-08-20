
import styles from './App.module.css';
import InputCity from "./components/inputCity";


function App() {




  return (
    <div className="App">
        <img src = 'https://militaryarms.ru/wp-content/uploads/2021/10/8-4.png' className={styles.background}/>
      <InputCity/>
    </div>
  );
}

export default App;
