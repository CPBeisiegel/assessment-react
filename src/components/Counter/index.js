import styles from "./styles.module.css";
import {useState} from 'react';


export function Counter(){

const [counter, setCounter] = useState(0);

function handleIncrement(){
  setCounter(counter + 1);
  console.log(counter)
}

function handleDecrement(){
    setCounter(counter - 1);   
}



    return (
        <div className={styles.counterContainer}>
             <h1>{counter}</h1>
            <button onClick={handleIncrement} className="btn">Increment</button>
            <button onClick={handleDecrement} className="btn">Decrement</button>

        </div>
    )
}