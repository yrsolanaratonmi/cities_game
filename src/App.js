
import styles from './App.module.css';
import InputCity from "./components/inputCity";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {createContext, useState} from "react";
import NotFound from "./components/NotFound";




export const Counter = createContext()

export const CounterFunc = createContext()






function App() {

    const [count, setCount] = useState(0)


  return (
      <BrowserRouter>

          <div className={styles.div}>
              <Counter.Provider value={count}>
                  <CounterFunc.Provider value={setCount}>

                      <Routes>
                          <Route path = "/" element={<InputCity/>}/>
                          <Route path="*" element={<NotFound />} />

                      </Routes>

                  </CounterFunc.Provider>

              </Counter.Provider>


              <div className={styles.count}>{`Городов отгадано : ${count}`}</div>

          </div>

      </BrowserRouter>

  );
}

export default App;
