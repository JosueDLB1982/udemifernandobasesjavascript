import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

const [categories, setCategories] = useState([]);
const onAddCategory = (newCategory) => {
    /* console.log('Samuray X') */
   if(categories.includes(newCategory)) return /* para no incluir busquedas repetidas */
   setCategories([newCategory, ...categories ])
}

  return (
    <>
        <h1>GifExpertApp</h1>
        <AddCategory
            onNewCategory = {onAddCategory}
        />   
            { 
                categories.map((category) => 
                    (
                       <GifGrid 
                            key = {category}
                            category = {category}
                        />  
                    )
                )
            }
    </>
  )
}
