import { useState } from "react"
import { AddCategory } from "./components/AddCategory"
import { GifGrid } from "./components/GifGrid"
export const GifExpertApp = () => {

    const [categories, setCategory] = useState([])
    const addCategory = () => {
        setCategory([...categories, 'Comedi'])
    }

    const onNewValue = (newCategory) => {
        //TODO: validate that the value is not repeated
        // const categoriesTest = []
        // const newCateryToLowerCase = newCategory.toLowerCase()
        // for (let i = 0; i < categories.length; i++) {
        //     let category = categories[i];
        //     categoriesTest.push(category.toLowerCase())
        //     console.log(newCateryToLowerCase)
        //     console.log(categoriesTest[i])
        //     if (categoriesTest[i] === newCateryToLowerCase) {

        //     }
        // }

        if (categories.includes(newCategory)) return
        setCategory([...categories, newCategory])

    }
    return (
        <>
            <h2>Gif App</h2>

            <AddCategory onNewValue={(value) => onNewValue(value)} />

            <button onClick={addCategory}>Add category</button>


            {categories.map((category) => (
                <GifGrid key={category} category={category} />

            ))}
        </>
    )
}