import { func } from 'prop-types'
import React, { useState } from 'react'
import Proptypes from 'prop-types'

function AddTodo({ onCreate }) {
    const [value, setValue] = useState('')

    function submitHandler(event) {
        event.preventDefault()
        if (value.trim) {
            onCreate(value)
            setValue('')
        }
    }
    return (
        
        <form style={{marginBottom: '1rem'}} onSubmit={submitHandler}>
            <input value={value} onChange={event => setValue(event.target.value)}/>
            <button type='submit'>AddTodo</button>
        </form>
    )
}

AddTodo.propTypes = {
    onCreate: Proptypes.func.isRequired
}
export default AddTodo