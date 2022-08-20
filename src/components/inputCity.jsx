import cities from '../cities/cities.json'
import {createRef, useState} from "react";
import styles from '../styles/inputCity.module.css'

const InputCity = () => {

   let [initialCity, setInitialCity] = useState(cities[Math.floor(Math.random() * 10000)].name)

    let foundCity

    let [error, setError] = useState('')

    let [lastLetter, setLastLetter] = useState(initialCity[initialCity.length - 1])
    
    let input = createRef()
    return (
        <div className={styles.div}>
          <input className={styles.input} ref={input}/>





            <button className={styles.button} onClick={() => {

                setLastLetter(initialCity[initialCity.length - 1])

                if (lastLetter === 'ь' || lastLetter === 'ъ' || lastLetter === 'ы') {

                   setLastLetter(initialCity[initialCity.length - 2])
                }

                if (input.current.value[0].toLowerCase() !== lastLetter) {setError ('Неправильная буква')} else {

                    foundCity = cities.find(el => el.name.toLowerCase() === input.current.value.toLowerCase())





                    if (foundCity) {
                        let letter = foundCity.name[foundCity.name.length - 1]
                        if (letter === 'ь' || letter === 'ъ' || letter === 'ы') {letter = foundCity.name[foundCity.name.length - 2]}
                        letter = letter.toUpperCase()
                        let letterMas = cities.filter(el => el.name[0] === letter)
                        let random = Math.floor(Math.random() * letterMas.length)
                        let newCity = letterMas[random]




                        setInitialCity(newCity.name)
                        if (newCity.name[newCity.name.length - 1] === 'ъ' || newCity.name[newCity.name.length - 1] === 'ь' || newCity.name[newCity.name.length - 1] === 'ы') {
                            setLastLetter(newCity.name[newCity.name.length - 2])
                        } else {setLastLetter(newCity.name[newCity.name.length - 1])}
                        cities.splice(cities.indexOf(newCity), 1)
                        cities.splice(cities.indexOf(foundCity), 1)
                        setError('')



                    } else setError('Город не найден / уже был')
                }
            }}> > </button>

<div className={styles.text}>{`Город : ${initialCity} ` }</div>
            <div className={styles.text}>{`Тебе на : ${lastLetter.toUpperCase()} ` }</div>
            <div className={styles.error}> {error} </div>

        </div>
    )
}

export default InputCity