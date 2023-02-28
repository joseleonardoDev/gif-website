import { useState } from "react"
import PropTypes from 'prop-types'

export const AddCategory = ({ onNewValue }) => {

    const [valueAdded, setValueAdded] = useState('');

    const inputChanged = (event) => {
        setValueAdded(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        const newValue = valueAdded.trim()
        if (newValue.length < 3) return;
        // setCategory(categories =>[...categories, valueAdded])
        setValueAdded('')
        onNewValue(newValue)

    }

    return (
        <form onSubmit={(event) => onSubmit(event)} aria-label="form">
            <input
                type="text"
                placeholder="Search gif"
                value={valueAdded}
                onChange={inputChanged}
            />
        </form>

    )
}

AddCategory.propTypes = {
    onNewValue: PropTypes.func.isRequired
}