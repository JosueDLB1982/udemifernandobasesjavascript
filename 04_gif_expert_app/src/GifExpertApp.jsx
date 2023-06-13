import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {

const [categories, setCategories] = useState([]);
const onAddCategory = (newCategory) => {
    /* console.log('Samuray X') */
   if(categories.includes(newCategory)) return /* para no incluir busquedas repetidas */
   setCategories([newCategory, ...categories ])
}

/* console.log(categories) */

  return (
    <>
        <h1>GifExpertApp</h1>
        <AddCategory
            onNewCategory = {onAddCategory}
        />
        {/* <button onClick={ onAddCategory }> AGREGAR </button> */}
        
        <ol>
            { 
                categories.map((category) => {
                    return <li key={category}>{category}</li>
                })
            }
        </ol>
    </>
  )
}
