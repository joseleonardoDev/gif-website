import { useState } from "react"

export const AddCategory = ({onNewValue}) => {

    const [valueAdded, setValueAdded] = useState('');

    const inputChanged = ( event ) => {        
        setValueAdded(event.target.value)
    }

    const onSubmit = ( event ) => {        
        event.preventDefault()
        const newValue = valueAdded.trim()
        if(newValue.length < 3) return;
        // setCategory(categories =>[...categories, valueAdded])
        onNewValue(newValue)
        setValueAdded('')
    }

    return (
        <form onSubmit={ (event) => onSubmit(event)}>
           <input
             type="text"
             placeholder="Search gif"
             value={valueAdded}
             onChange={ inputChanged}
          />
        </form>
    
    )
}