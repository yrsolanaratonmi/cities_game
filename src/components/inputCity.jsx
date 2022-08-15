import cities from '../cities/cities.json'
import {createRef, useEffect, useRef, useState} from "react";

const InputCity = () => {

   let [initialCity, setInitialCity] = useState(cities[Math.floor(Math.random() * 10000)].name)

    let foundCity

    let [lastLetter, setLastLetter] = useState(initialCity[initialCity.length - 1])









    let input = createRef()
    return (
        <>
            <input ref={input}/>
            <button onClick={() => {

                setLastLetter(initialCity[initialCity.length - 1])

                if (lastLetter === 'ь' || lastLetter === 'ъ' || lastLetter === 'ы') {

                   setLastLetter(initialCity[initialCity.length - 2])
                }
                console.log(input.current.value[0].toLowerCase(), lastLetter)

                if (input.current.value[0].toLowerCase() !== lastLetter) {alert ('ты охуел')} else {

                    foundCity = cities.find(el => el.name.toLowerCase() === input.current.value.toLowerCase())





                    if (foundCity) {
                        let letter = foundCity.name[foundCity.name.length - 1]
                        if (letter === 'ь' || letter === 'ъ' || letter === 'ы') {letter = foundCity.name[foundCity.name.length - 2]}
                        letter = letter.toUpperCase()
                        let letterMas = cities.filter(el => el.name[0] === letter)
                        let random = Math.floor(Math.random() * letterMas.length)
                        let newCity = letterMas[random]



                        setInitialCity(newCity.name)
                        cities.splice(cities.indexOf(newCity), 1)
                        cities.splice(cities.indexOf(foundCity), 1)



                    } else alert('город не найден / уже был')
                }
            }}>искать</button>

<div>{`Город : ${initialCity} ` }</div>
            <div>{`Тебе на : ${lastLetter.toUpperCase()} ` }</div>

        </>
    )
}

export default InputCity