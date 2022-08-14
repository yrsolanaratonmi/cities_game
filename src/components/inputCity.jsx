import cities from '../cities/cities.json'
import {createRef, useEffect, useRef, useState} from "react";

const InputCity = () => {

   let [initialCity, setInitialCity] = useState(cities[Math.floor(Math.random() * 10000)].name)

    let foundCity









    let input = createRef()
    return (
        <>
            <input ref={input}/>
            <button onClick={() => {
                if (input.current.value[0] !== initialCity[initialCity.length -1].toUpperCase()) {alert ('ты охуел')} else {
                    foundCity = cities.find(el => el.name === input.current.value)





                    if (foundCity) {
                        let letter = foundCity.name[foundCity.name.length - 1]
                        letter = letter.toUpperCase()
                        let newCity = cities.find(el => el.name[0] === letter)



                        setInitialCity(newCity.name)
                        cities.splice(cities.indexOf(newCity), 1)
                        cities.splice(cities.indexOf(foundCity), 1)



                    } else alert('город не найден / уже был')
                }
            }}>искать</button>

<div>{`Город : ${initialCity} ` }</div>

        </>
    )
}

export default InputCity