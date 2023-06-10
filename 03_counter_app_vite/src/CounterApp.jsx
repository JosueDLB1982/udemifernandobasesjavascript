import {useState} from 'react'
import PropTypes from 'prop-types'

export const CounterApp = ( { value } ) => {

const [counter, setCounter] = useState(value)

const incrementHandleAdd = () => setCounter(counter + 1)

const decrementHandleAdd = () => setCounter(counter - 1)

const resetHandleAdd = () => setCounter(value)

  return (
    <>
        <h1>CounterApp</h1>
        <h2> { counter } </h2>
        <button onClick={ incrementHandleAdd }> +1 </button>
        <button onClick={ resetHandleAdd }> RESET </button>
        <button onClick={ decrementHandleAdd }> -1</button>
    </>
  )
}
CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
}

CounterApp.defaultProps = {
    value: 0
}