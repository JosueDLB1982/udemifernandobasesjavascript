
import { useState } from "react"

export const AddCategory = () => {

const [inputValue, setInputValue] = useState('')
const inputChange = ({target}) => { /* e.target.value desestructuramos el target en el parametro de la función para no esribir e */
    console.log(target.value)
    setInputValue(target.value)
}

const onSubmit = (e) => {
    console.log(e)
    e.preventDefault()
    console.log(inputValue)
}

  return (
    <form onSubmit={ onSubmit }>
        <input
            type="text"
            placeholder="Buscar Gifs"
            value={inputValue}
            onChange=/* {e => inputChange(e)} */{inputChange}
        />
    </form>
  )
}
