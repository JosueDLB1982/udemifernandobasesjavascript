import { useState } from "react";

export const GifExpertApp = () => {

const [categories, setCategories] = useState(['Demon Slayer', 'One Punch']);

console.log(categories)

  return (
    <>
        <h1>GifExpertApp</h1>
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
