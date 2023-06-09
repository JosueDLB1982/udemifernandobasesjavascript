import PropTypes from 'prop-types'
import { useState } from "react"

export const AddCategory = ( {onNewCategory} ) => {

const [inputValue, setInputValue] = useState('')
const inputChange = ({target}) => { /* e.target.value desestructuramos el target en el parametro de la función para no esribir e */
  
    setInputValue(target.value)
}

const onSubmit = (e) => {
    e.preventDefault()
    if (inputValue.trim().length <= 1) return

    onNewCategory(inputValue.trim().toUpperCase())
    
    setInputValue('')
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

AddCategory.propTypes = {
  categories: PropTypes.array.isRequired,
  setCategories: PropTypes.string,
  onNewCategory: PropTypes.func
}