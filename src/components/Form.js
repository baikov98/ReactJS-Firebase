import React, {useState, useContext} from 'react'
import {alertContext} from '../context/alert/alertContext'

export const Form = () => {
    const [value, setValue] = useState('')
    const alert = useContext(alertContext)
    const submitHandler = event => {
        event.preventDefault()

        if (value.trim()) {

            alert.show('Заметка была создана', 'success')
            setValue('')
        } else {
            alert.show('Введите текст', 'warning')
        }
    }
    return (
        <form onSubmit={submitHandler}>
            <div className='form-group'>
                <input type='text' 
                        className='form-control mt-3'
                        placeholder='Введите название заметки'
                        value={value}
                        onChange={e => setValue(e.target.value)}>
                        
                </input>
            </div>
        </form>
    )
}