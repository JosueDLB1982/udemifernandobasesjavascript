import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {

const [categories, setCategories] = useState([]);
const onAddCategory = (newCategory) => {
    /* console.log('Samuray X') */
   console.log(newCategory)
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
                categories.map((category, i) => {
                    return <li key={i}>{category}</li>
                })
            }
        </ol>
    </>
  )
}
