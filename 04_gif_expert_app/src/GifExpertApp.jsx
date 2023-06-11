import { useState } from "react";

export const GifExpertApp = () => {

const [categories, setCategories] = useState(['Demon Slayer', 'One Punch']);
const onAddCategory = () => {
    /* console.log('Samuray X') */
    setCategories(['Samuray X', ...categories]) /* usamos spread operator para crear una copia del array y añadir el elemento nuevo */
    // setCategories(cat => [...cat, 'Samuray X']) /* Usando un callback. Otra forma de hacerlo */
}

console.log(categories)

  return (
    <>
        <h1>GifExpertApp</h1>
        <button onClick={ onAddCategory }> AGREGAR </button>
        <ol>
            {
                categories.map((category, i) => {
                    return <li key={i}>{category}</li>
                })
            }
        </ol>
    </>
  )
}
