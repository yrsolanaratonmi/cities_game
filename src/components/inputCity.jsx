import cities from '../cities/cities.json'
import {useCallback, useContext, useEffect, useState} from "react";
import styles from '../styles/inputCity.module.css'
import {Bounce} from "react-reveal";
import {Counter, CounterFunc} from "../App";



const InputCity = () => {


    let count = useContext(Counter)

    let setCount = useContext(CounterFunc)


    let [initialCity, setInitialCity] = useState(cities[Math.floor(Math.random() * 10000)].name)

    let foundCity

    let [error, setError] = useState('')

    let [lastLetter, setLastLetter] = useState(initialCity[initialCity.length - 1])

    let [input, setInput] = useState('')



        const handleUserKeyPress = useCallback(event => {
            const { keyCode } = event;
            if(keyCode === 13 ){
                event.preventDefault();
                document.getElementById("btn").click()
            }
        }, []);

        useEffect(() => {
            document.addEventListener("keydown", handleUserKeyPress);
            return () => {
                document.removeEventListener("keydown", handleUserKeyPress);
            };
        }, [handleUserKeyPress]);


        return (

            <div className={styles.div}>
                <Bounce left cascade>
                    <div className={styles.error}> {error} </div>

                    <input id='input' placeholder={lastLetter.toUpperCase()} className={styles.input}
                           value={input} onChange={(a) => {
                        setInput(a.target.value)
                    }}/>

                    <button id='btn' className={styles.button} onClick={() => {
                        setLastLetter(initialCity[initialCity.length - 1])

                        if (lastLetter === 'ь' || lastLetter === 'ъ' || lastLetter === 'ы') {
                            setLastLetter(initialCity[initialCity.length - 2])
                        }

                        if ((input[0].toLowerCase()) !== lastLetter) {
                            setError('Неправильная буква')
                        } else {

                            foundCity = cities.find(el => el.name.toLowerCase() === input.toLowerCase())


                            if (foundCity) {
                                let letter = foundCity.name[foundCity.name.length - 1]
                                if (letter === 'ь' || letter === 'ъ' || letter === 'ы') {
                                    letter = foundCity.name[foundCity.name.length - 2]
                                }
                                letter = letter.toUpperCase()
                                let letterMas = cities.filter(el => el.name[0] === letter)
                                let random = Math.floor(Math.random() * letterMas.length)
                                let newCity = letterMas[random]


                                setInitialCity(newCity.name)
                                if (newCity.name[newCity.name.length - 1] === 'ъ' || newCity.name[newCity.name.length - 1] === 'ь' || newCity.name[newCity.name.length - 1] === 'ы') {
                                    setLastLetter(newCity.name[newCity.name.length - 2])
                                } else {
                                    setLastLetter(newCity.name[newCity.name.length - 1])
                                }
                                cities.splice(cities.indexOf(newCity), 1)
                                cities.splice(cities.indexOf(foundCity), 1)


                                setError('')
                                setInput('')
                                setCount(count+1)


                            } else setError('Город не найден / уже был')
                        }
                    }}> >
                    </button>



                    <div className={styles.text}>{`Город : ${initialCity} `}</div>


                        <button onClick={() => {window.location.reload()}} className={styles.undertext}>{'Начать сначала'}</button>







                </Bounce>
            </div>


    )
}

export default InputCity